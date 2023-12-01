const {
  routeAbsolut,
  changeAbsolute,
  existRoute,
  fileExtension,
  readRoute,
  extractLinks,
} = require("./functions");

const mdLinks = (path) => {
  return new Promise((resolve, reject) => {
    const valiteRoute = changeAbsolute(path);
   
    const exists = existRoute(valiteRoute);
    

    if (!exists) {
      reject("existe un error");
    } else {
      const fileGood = fileExtension(valiteRoute);
      
      const readFile = readRoute(fileGood);
      readFile

        .then((data) => {
          const links = extractLinks(data, valiteRoute);
          resolve(links);
        })
        .catch((error) => {
          error;
        });
    }
  });
};

module.exports = {
  mdLinks,
};
