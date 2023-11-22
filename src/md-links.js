const {routeAbsolut, changeAbsolute} = require('./functions')
const mdLinks = (path) => {
    return new Promise((resolve, reject) => {
        const valiteRoute = changeAbsolute(path);
        if(!valiteRoute)  reject(error);
         resolve (valiteRoute)
        
    })
}

module.exports = {
    mdLinks,
};
