const {mdLinks} = require('./md-links');
const argv = process.argv
const file = argv[2];
const validate = argv.includes('--validate');



mdLinks(file, validate)
	.then(links => console.log(links))
	.catch(error => console.error(error));