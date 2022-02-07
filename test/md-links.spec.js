const mdLinks = require('../index');
const validarAbsoluta = require('../index');

jest.setTimeout(30000);

describe('mdLinks ', () => {
    test('Verificar si es una funcion ', () => {
        expect(typeof mdLinks).toEqual('function');
    });

    test('mdLinks(path, options) para el primer link del archivo', () => {
      return mdLinks('dir/dir_1/example2.md', { validate: false, stats: false })
          .then(response => expect(response[0].href).toBe('https://curriculum.laboratoria.la/es/topics/javascript/04-arrays'));
    });

    test('La funcion mdLinks debería de tener la propiedad text', () => {
        return mdLinks('dir/dir_1/example2.md', { validate: false, stats: false })
            .then(response => expect(response[0].text).toEqual('Arreglos'));
    });
    test('La funcion mdLinks debería de tener la propiedad path', () => {
        return mdLinks('dir/dir_1/example2.md', { validate: false, stats: false })
            .then(response => expect(response[0].path).toEqual('C:\\Users\\N14\\Documents\\GitHub\\LIM016-md-links\\dir\\dir_1\\example2.md'));
    });
    test('La funcion mdLinks debería de tener la propiedad "OK', () => {
        return mdLinks('dir/dir_1/example2.md', { validate: true, stats: false })
            .then(response => expect(response[0].ok).toEqual('OK'));
    });
    test('La funcion mdLinks debería de tener la propiedad "status"', () => {
        return mdLinks('dir/dir_1/example2.md', { validate: true, stats: false })
            .then(response => expect(response[0].status).toEqual(200));
    });
});
/*

describe('validarAbsoluta', () =>{
  it('is a function', ()=>{
    expect(typeof validarAbsoluta).toBe('function');
  });
  it('1.- Validar que es Absoluta  --> Retorna una Direciòn Absoluta', () => {
    expect(validarAbsoluta('C:/Users/USUARIO/Documents/LIM016-md-links/src')).toBe('C:\\Users\\N14\\Documents\\GitHub\\LIM016-md-links\\README.md');
  });
  it('1.- Es relativa  --> Retorna una Direciòn Absoluta', () => {
    expect(validarAbsoluta('README.md')).toBe('C:\\Users\\N14\\Documents\\GitHub\\LIM016-md-links\\README.md');
  });
})
*/
