const {
  changeAbsolute,
  existRoute,
  fileExtension,
  readRoute,
  extractLinks,
  validateLink,
  statsLinks,
} = require("./functions");

const mdLinks = (path, validate, stats) => {
  return new Promise((resolve, reject) => {
    const valiteRoute = changeAbsolute(path);
    const exists = existRoute(valiteRoute);
    if (!exists) {
      reject("Error: La ruta no existe");
    } else {
      const fileGood = fileExtension(valiteRoute);
      const readFile = readRoute(fileGood);
      readFile
        .then((data) => {
          const links = extractLinks(data, valiteRoute);
          if (validate && stats) {
            validateLink(links)
              .then((validatedLink) => {
                return statsLinks(validatedLink);
              })
              .then((statsResult) => {
                resolve(statsResult);
              })
              .catch((error) => {
                reject(error);
              });
          } else if (validate) {
            validateLink(links)
              .then((validatedLinks) => {
                resolve(validatedLinks);
              })
              .catch((error) => {
                reject(error);
              });
          } else if (stats) {
                resolve(statsLinks(links)); 
          } else {
            resolve(links);
          }
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
};

module.exports = {
  mdLinks,
};
