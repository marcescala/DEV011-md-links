const { 
  routeAbsolut,
  changeAbsolute, 
  existRoute, 
  fileExtension,
  readRoute,
  extractLinks,
} = require('../src/functions.js');
const { mdLinks } = require('../src/md-links.js');

describe('mdLinks', () => {
  it('resuelve ...', () => {
    const route = mdLinks('./test/molienda.mdwn')
    expect(route).resolves.toEqual([
      {
        'url': 'https://es.wikipedia.org/wiki/Markdown',
        'text': 'Markdown',
        'file': '/Users/marcelaavellaneda/Documents/LABORATORIA/DEV011-md-links/test/molienda.mdwn'
      }]);
  });
  it('reject ...', () => {
    const route = mdLinks('./test/molienda.js')
    expect(route).rejects.toEqual('existe un error');
  });
});

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
  it('lee el archivo', () =>{
    const read = readRoute('./test/molienda.mdwn');
    expect(read).resolves.toBe('[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado');
  });
  it('hay un error', () => {
    const read = readRoute('./test/nadas.md');
    expect(read).rejects.toThrowError();
  });
})

describe('extractLinks', () => {
  it('crea un objeto', () => {
    const links = extractLinks('./prueba/prueba.md');
    const result = []
    expect(links).toEqual(result);
  });
  it('extrae los links', () => {
  const data = '[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado'
  const route = '/Users/marcelaavellaneda/Documents/LABORATORIA/DEV011-md-links/test/molienda.mdwn'
  const links = extractLinks(data, route);
  const result = [
    {
    url: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: '/Users/marcelaavellaneda/Documents/LABORATORIA/DEV011-md-links/test/molienda.mdwn'
   }
  ];
  expect(links).toEqual(result)
  });
})