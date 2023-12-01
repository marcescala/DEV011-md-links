const {mdLinks} = require ('./md-links');

mdLinks('./prueba/prueba.md')
	.then(links => console.log(links))
	.catch(error => console.error(error));
// mdLinks('./test/molienda.mdwn', true)
// 	.then(links => {
// 	  // => [{ href, text, file, status, ok }, ...]
// 	})
// 	.catch(console.error);
// mdLinks("./some/example.md", false)
// 	.then(links => {
// 	  // => [{ href, text, file }, ...]
// 	})
// 	.catch(console.error);