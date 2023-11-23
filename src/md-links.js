const {routeAbsolut, 
    changeAbsolute, 
    existRoute,
} = require('./functions')

const mdLinks = (path) => {
    return new Promise((resolve, reject) => {
        const valiteRoute = changeAbsolute(path);
        if(!valiteRoute)  reject(error);
        const exists = (existRoute(valiteRoute));
        resolve (exists)
        
    })
}

module.exports = {
    mdLinks,
};
