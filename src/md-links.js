const {routeAbsolut, 
    changeAbsolute, 
    existRoute,
    fileExtension,
    readRoute,
} = require('./functions')

const mdLinks = (path) => {
    return new Promise((resolve, reject) => {
        const valiteRoute = changeAbsolute(path);
        const exists = existRoute(valiteRoute);
        if(!exists)  {
            reject('existe un error')
        }
        else { 
            const fileGood = fileExtension(valiteRoute);
            const readFile = readRoute(fileGood)
            resolve(readFile);
        } 
    });
}

module.exports = {
    mdLinks,
};
