const {routeAbsolut, 
    changeAbsolute, 
    existRoute,
    fileExtension
} = require('./functions')

const mdLinks = (path) => {
    return new Promise((resolve, reject) => {
        const valiteRoute = changeAbsolute(path);
        if(!valiteRoute)  reject(error);
        const exists = (existRoute(valiteRoute));
        if (exists === true){ 
            const fileGood = fileExtension(valiteRoute);
            resolve(fileGood);
        } 
        // else {
        //     reject(error) 
        //     };
       
    });
}

module.exports = {
    mdLinks,
};
