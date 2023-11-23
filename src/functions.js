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


module.exports = {
	routeAbsolut,
	changeAbsolute,
  existRoute,
};


// lee la extension del archivo


// const filePath = '/Users/marcelaavellaneda/Documents/LABORATORIA/DEV011-md-links/src/md-links.js';
// const fileExtension = path.extname(filePath);

// console.log('Extensión del archivo:', fileExtension);

// lee los archivos
// const fs = require('fs');

// function readFile(path) {
// 	return new Promise((resolve, reject) => {
// 		fs.readFile(path, 'utf8', (error, data) => {
// 			if (error) return reject(error);
// 			return resolve(data);
// 		});
// 	});
// }

// readFile('./prueba/prueba.md')
// 	.then(data => console.log(data))
// 	.catch(error => console.error(error));
