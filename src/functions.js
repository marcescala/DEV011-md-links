const path = require("path");
const fs = require("fs");
const axios = require("axios");
const { lookupService } = require("dns/promises");

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
  const newLInks = links.map((link) => {
    const linksUrl = link.url;
    return axios
      .get(linksUrl)
      .then((response) => {
        return {...link, status: response.status, statusText: response.statusText}
      })
      .catch((error) => {
        return {...link, status: "404", statusText: "fail"}
      });
  });
  return Promise.all(newLInks)
};

module.exports = {
  routeAbsolut,
  changeAbsolute,
  existRoute,
  fileExtension,
  readRoute,
  extractLinks,
  validateLink,
};
