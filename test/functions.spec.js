const {changeAbsolute, existRoute, fileExtension} = require('../src/functions.js');
const { mdLinks } = require('../src/md-links.js');

describe('mdLinks', () => {
  it('es una promesa', () => {
    const route = mdLinks('./prueba/prueba.md')
    expect(route).resolves.toEqual('/Users/marcelaavellaneda/Documents/LABORATORIA/DEV011-md-links/prueba/prueba.md')
  })
}) 

describe('ChangeAbsolute', () => {
  it('cambia a ruta absoluta', () => {
    const route = changeAbsolute('./prueba/prueba.md')
    expect(route).toBe('/Users/marcelaavellaneda/Documents/LABORATORIA/DEV011-md-links/prueba/prueba.md')
    // console.log('FIX ME!');
  });

});
describe('existRoute', () => {
  it('verificar que exista', () => {
    const exists = existRoute('./prueba/prueba.md');
    expect(exists).toBe(true);
  });

});

describe('fileExtension', () => {
  it('extensión Markdown', () => {
    const file = fileExtension('./prueba/prueba.md');
    expect(file).toBe('./prueba/prueba.md');
  });

});