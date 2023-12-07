const {
  changeAbsolute,
  existRoute,
  fileExtension,
  readRoute,
  extractLinks,
  validateLink,
} = require("./functions");

const mdLinks = (path, validate) => {
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
          if (validate) {
            validateLink(links)
            .then((validateLink) => {
              resolve(validateLink);
            })
            .catch((error) => {
              reject(error);
            });
          } else { 
            resolve(links)
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
