const {mdLinks} = require ('./md-links');

mdLinks('./test/molienda.mdwn')
	.then(data => console.log('hola', data))
	.catch(error => console.error(error));