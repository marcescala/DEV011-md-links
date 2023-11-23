const {changeAbsolute, existRoute} = require('../src/functions.js');


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