// convertir a ruta absoluta
const path = require('path');
const fs = require('fs');

const routeAbsolut = (route) => path.isAbsolute(route);
const changeAbsolute = (route) =>{
  if(!routeAbsolut(route)) {
    return path.resolve(route)
  }
  return route
}

const existRoute = (route) => fs.existsSync(route);

const fileExtension = (route) => {
  const extensionRoute = path.extname(route);
  if( extensionRoute.includes('.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text')){
    return route
  } 
}  

const readRoute = (route) => {
  return new Promise((resolve, reject) => {
    fs.readFile(route, (error, data) => {
      if (error) {
        return reject(error);
      } return resolve(data.toString());
    });
  });
};


// const extracLinks = (data) => {
//   const regex = ('(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?');

//   while (condition) {
    
//   }

// }

module.exports = {
	routeAbsolut,
	changeAbsolute,
  existRoute,
  fileExtension,
  readRoute,
};


// const patronURL = new RegExp('(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?');