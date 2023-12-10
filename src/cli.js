const {mdLinks} = require ('./md-links');
const validate = true; 

const file = process.argv[2];



mdLinks(file)
	.then(links => console.log(links))
	.catch(error => console.error(error));