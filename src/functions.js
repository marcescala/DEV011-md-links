const path = require("path");
const fs = require("fs");
const axios = require("axios");

const routeAbsolut = (route) => path.isAbsolute(route);
const changeAbsolute = (route) => {
  if (!routeAbsolut(route)) {
    return path.resolve(route);
  }
};

const existRoute = (route) => fs.existsSync(route);
const fileExtension = (route) => {
  const extensionRoute = path.extname(route);
  if (
    extensionRoute.includes(
      ".md",
      ".mkd",
      ".mdwn",
      ".mdown",
      ".mdtxt",
      ".mdtext",
      ".markdown",
      ".text"
    )
  ) {
    return route;
  }
};

const readRoute = (route) => {
  return new Promise((resolve, reject) => {
    fs.readFile(route, "utf8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

const extractLinks = (data, route) => {
  const linksPattern = /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g;
  const links = [];
  let linkMatch;
  while ((linkMatch = linksPattern.exec(data)) !== null) {
    const linkUrl = linkMatch[2];
    const linkText = linkMatch[1];
    links.push({ url: linkUrl, text: linkText, file: route });
  }
  return links;
};

const validateLink = (links) => {
  const newLinks = links.map((link) => {
    return axios
      .get(link.url)
      .then((response) => {
        return {...link, status: response.status, statusText: response.statusText}
      })
      .catch((error) => {
        return {...link, status: error.response?.status ?? 'fail' , statusText: "fail"}
      }); 
      
  }); 
  
  return Promise.all(newLinks)
  
};

// const statsLinks = (newLinks) => {
//   return new Promise ((resolve, reject) => {
//   const countLinks = newLinks.filter((link) => {
//   return link.statusText == 'fail';
//   });
//   const totalLinks = newLinks.length;
//   const uniqueLinks= [...new Set(newLinks.map((link) => link.url))].length;
//   const validLinksCount = countLinks.length;
//   console.log( totalLinks, uniqueLinks, validLinksCount, 'por aca');
//   const statsValidate = {
//     Total: totalLinks,
//     Unique: uniqueLinks,
//     Broken: validLinksCount
//   };
//     resolve(statsValidate);
//   });
// };

const statsLinks = (links) => {
  return new Promise((resolve, reject) => {
    const Total = links.length;
    const Unique = [...new Set(links.map((link) => link.url))].length;
    const Broken = links.filter((link) => link.statusText === "fail").length;

    resolve({ Total, Unique, Broken });
  });
};

module.exports = {
  routeAbsolut,
  changeAbsolute,
  existRoute,
  fileExtension,
  readRoute,
  extractLinks,
  validateLink,
  statsLinks,
};
