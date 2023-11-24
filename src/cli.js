const {mdLinks} = require ('./md-links');

mdLinks('./src/prueba.js')
	.then(data => console.log(data))
	.catch(error => console.error(error));