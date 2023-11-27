const { 
  routeAbsolut,
  changeAbsolute, 
  existRoute, 
  fileExtension,
  readRoute,
} = require('../src/functions.js');
const { mdLinks } = require('../src/md-links.js');

// describe('mdLinks', () => {
//   it('resuelve ...', () => {
//     const route = mdLinks('./prueba/prueba.md')
//     expect(route).resolves.toEqual('/Users/marcelaavellaneda/Documents/LABORATORIA/DEV011-md-links/prueba/prueba.md')
//   });
// });

describe('routeAbsolut', () => {
  it('comprueba que sea Absoluta', () => {
    const route = routeAbsolut('./src/pru.md')
    expect(route).toBe(false);
  });
})

describe('ChangeAbsolute', () => {
  it('cambia a ruta absoluta', () => {
    const route = changeAbsolute('./prueba/prueba.md');
    expect(route).toBe('/Users/marcelaavellaneda/Documents/LABORATORIA/DEV011-md-links/prueba/prueba.md');
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
})

describe('readRoute', () => {
  it('es una promesa ', () => {
    const read = readRoute('./prueba/prueba.md');
    expect(read).toBeInstanceOf(Promise);
  });
  it('es un objeto ', () => {
    const read = readRoute('./prueba/prueba.md');
  expect(typeof read).toEqual('object');
  });
})
