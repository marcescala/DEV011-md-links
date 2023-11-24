// convertir a ruta absoluta
const path = require('path');
const fs = require('fs');
const { error } = require('console');
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
    return route;
  } 
  // else {return error('No es un archivo Markdown ' +  extensionRoute)};
}  



module.exports = {
	routeAbsolut,
	changeAbsolute,
  existRoute,
  fileExtension,
};



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
