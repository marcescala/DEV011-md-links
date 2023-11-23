const {mdLinks} = require ('./md-links');

mdLinks('./prueba/prueba.md')
	.then(data => console.log(data))
	.catch(error => console.error(error));