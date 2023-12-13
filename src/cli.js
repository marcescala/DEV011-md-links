#!/user/bin/env node
const { mdLinks } = require("./md-links");
const argv = process.argv;
const file = argv[2];
const validate = argv.includes("--validate");
const stats = argv.includes("--stats");

mdLinks(file, validate, stats)
  .then((links) => {
	if (validate && stats){
		console.table(links);
	} else if (stats) {
      console.table(Object.fromEntries(Object.entries(links).slice(0, 2)));
    } else {
      console.log(links);
    }
  })

  .catch((error) => console.error(error));
