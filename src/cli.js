const {mdLinks} = require ('./md-links');

mdLinks('./test/functions.spec.js')
	.then(data => console.log(data))
	.catch(error => console.error(error));