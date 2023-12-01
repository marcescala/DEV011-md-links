const path = require('path');
const fs = require('fs');
const axios = require('axios');
const { error } = require('console');
//const MarkdownIt = require('markdown-it');
//const md = new MarkdownIt();
// const { marked } = require('marked');

const routeAbsolut = (route) => path.isAbsolute(route);
const changeAbsolute = (route) =>{
  if(!routeAbsolut(route)) {
    return path.resolve(route)
  }
}

const existRoute = (route) => fs.existsSync(route);
const fileExtension = (route) => {
  const extensionRoute = path.extname(route);
  if( extensionRoute.includes('.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text')){
    return route;
  } 
}  

const readRoute = (route) => {
  return new Promise((resolve, reject) => {
    fs.readFile(route, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

const extractLinks = (data, route) => {
  const linksPattern = /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g;
  const links = [];
  let linkMatch;
  // const result =[...data.match(linksPattern)];
  // const content = md.parseInline(data);
  // console.log(content, 'content');
  // content.forEach(element => {
  // const paragraph = element.content;
  while ((linkMatch = linksPattern.exec(data)) !== null ) {
    const linkUrl = linkMatch[2];
    const linkText = linkMatch[1];
    links.push({ url: linkUrl, text: linkText, file: route });
  }   
  return links; 
};

// axios.get('https://es.wikipedia.org')

// .then ((response)=>{
//   console.log( response, 'uno');

// })
// .catch((error)=>{
//   console.log(error);
  
// })

const validateLink = (links) => {
 return new Promise((resolve, reject) => {
  
  links.forEach(link => { 
    linksUrl = link.url;
    
    axios.get(linksUrl)
    
    .then((response) => {
    const newLinks = {...links};
    
     newLinks.status = response.status;
     newLinks.statusText = response.statusText;
     resolve(newLinks);
    })
    .catch(error =>{
     reject(error);
    });
  });
 });
}

module.exports = {
	routeAbsolut,
	changeAbsolute,
  existRoute,
  fileExtension,
  readRoute,
  extractLinks,
  validateLink,

};
