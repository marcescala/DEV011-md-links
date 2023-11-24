const {routeAbsolut, 
    changeAbsolute, 
    existRoute,
    fileExtension
} = require('./functions')

const mdLinks = (path) => {
    return new Promise((resolve, reject) => {
        const valiteRoute = changeAbsolute(path);
        console.log(valiteRoute);
        const exists = existRoute(valiteRoute);
        if(!exists)  {
            reject('existe un error, la ruta no existe o el ')

        }
        else { 
            const fileGood = fileExtension(valiteRoute);
            resolve(fileGood);
        } 
       
    });
}

module.exports = {
    mdLinks,
};
