const {mdLinks} = require ('./md-links');
const validate = false;

mdLinks('prueba/prueba.md', validate)
	.then(links => console.log(links))
	.catch(error => console.error(error));
