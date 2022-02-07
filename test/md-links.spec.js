
const {
  mdLinks,
  validarAbsoluta,
  validarRuta,
  verDirectorio,
  validarDirectorio_Archivo,
  extraerLinks,
  validarLinks
} = require('../index');

jest.setTimeout(30000);

const links = [
  {
    path: 'C:\\Users\\N14\\Documents\\GitHub\\LIM016-md-links\\dir\\dir_1\\example2.md',
    href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
    text: 'Arreglos'
  },
  {
    path: 'C:\\Users\\N14\\Documents\\GitHub\\LIM016-md-links\\dir\\dir_1\\example2.md',
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/',
    text: 'Array - MDN'
  },
  {
    path: 'C:\\Users\\N14\\Documents\\GitHub\\LIM016-md-links\\dir\\dir_1\\example2.md',
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
    text: 'Array.prototype.sort() - MDN'
  },
  {
    path: 'C:\\Users\\N14\\Documents\\GitHub\\LIM016-md-links\\dir\\dir_1\\example2.md',
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach',
    text: 'Array.prototype.forEach() - MDN'
  },
  {
    path: 'C:\\Users\\N14\\Documents\\GitHub\\LIM016-md-links\\dir\\dir_1\\example2.md',
    href: 'https://www.google.com/',
    text: 'google'
  },
  {
    path: 'C:\\Users\\N14\\Documents\\GitHub\\LIM016-md-links\\dir\\dir_1\\example2.md',
    href: 'https://www.google.com/',
    text: 'google'
  }
];
const linkss = [
  { path: 'C:\Users\N14\Documents\GitHub\LIM016-md-links\dir\dir_1\example2.md', href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays', text: 'Arreglos', status: '200', ok: 'OK' },
  { path: 'C:\Users\N14\Documents\GitHub\LIM016-md-links\dir\dir_1\example2.md', href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/', text: 'Array - MDN', status: '200', ok: 'OK' },
  { path: 'C:\Users\N14\Documents\GitHub\LIM016-md-links\dir\dir_1\example2.md', href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort', text: ' Array.prototype.sort() - MDN', status: '200', ok: 'OK' },
  { path: 'C:\Users\N14\Documents\GitHub\LIM016-md-links\dir\dir_1\example2.md', href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach', text: 'Array.prototype.forEach() - MDN', status: '200', ok: 'OK' },
  { path: 'C:\Users\N14\Documents\GitHub\LIM016-md-links\dir\dir_1\example2.md', href: 'https://www.google.com/', text: ' google', status: '200', ok: 'OK' },
  { path: 'C:\Users\N14\Documents\GitHub\LIM016-md-links\dir\dir_1\example2.md', href: 'https://www.google.com/', text: ' google', status: '200', ok: 'OK' },
  { path: 'C:\Users\N14\Documents\GitHub\LIM016-md-links\dir\example.md', href: 'https://www.google.com/', text: ' google', status: '200', ok: 'OK' },
  { path: 'C:\Users\N14\Documents\GitHub\LIM016-md-links\dir\example.md', href: 'https://www.google.com/', text: ' google', status: '200', ok: 'OK' },
  { path: 'C:\Users\N14\Documents\GitHub\LIM016-md-links\dir\example.md', href: 'https://www.google.com/', text: ' google', status: '200', ok: 'OK' },
  { path: 'C:\Users\N14\Documents\GitHub\LIM016-md-links\dir\example.md', href: 'https://www.lego.com/en-us/notfound', text: ' lego', status: '404', ok: 'FAIL' },
  { path: 'C:\Users\N14\Documents\GitHub\LIM016-md-links\dir\example.md', href: 'https://imgur.com/notfound', text: ' Imgur', status: '404', ok: 'FAIL' },
  { path: 'C:\Users\N14\Documents\GitHub\LIM016-md-links\dir\example.md', href: 'https://github.com/404', text: ' GitHub', status: '404', ok: 'FAIL' }
];

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


describe('validarAbsoluta', () => {
  it('is a function', ()=>{
    expect(typeof validarAbsoluta).toBe('function');
  });
  it('1.- Validar que es Absoluta  --> Retorna una Direciòn Absoluta', () => {
    expect(validarAbsoluta('C:\\Users\\N14\\Documents\\GitHub\\LIM016-md-links\\README.md')).toBe('C:\\Users\\N14\\Documents\\GitHub\\LIM016-md-links\\README.md');
  });
  it('1.- Es relativa  --> Retorna una Direciòn Absoluta', () => {
    expect(validarAbsoluta('README.md')).toBe('C:\\Users\\N14\\Documents\\GitHub\\LIM016-md-links\\README.md');
  });
})

describe('validarRuta', () => {
  it('is a function', () => {
    expect(typeof validarRuta).toBe('function');
  });
  it('2.- Validar que la Ruta Existe --> Retorna Verdadero', () => {
    expect(validarRuta('C:\\Users\\N14\\Documents\\GitHub\\LIM016-md-links\\README.md')).toBe(true);
  });
  it('2.- Validar que la Ruta Existe --> Retorna Falso', () => {
    expect(validarRuta('C:\\Users\\N14\\Documents\\GitHub\\README.md')).toBe(false);
  });
})

describe('verDirectorio', () =>{
  it('is a function', () => {
    expect(typeof verDirectorio).toBe('function');
  });
  it('3.- Validar si es Directorio --> Verdadero', () => {
    expect(verDirectorio('C:\\Users\\N14\\Documents\\GitHub\\LIM016-md-links\\dir')).toBe(true);
  });
  it('3.- Validar si es Directorio --> Retorna Falso', () => {
    expect(verDirectorio('C:\\Users\\N14\\Documents\\GitHub\\LIM016-md-links\\README.md')).toBe(false);
  });
})

describe('validarDirectorio_Archivo', () =>{
  it('is a function', () => {
    expect(typeof validarDirectorio_Archivo).toBe('function');
  });
  it('4.- validar Directorio o Archivo y Obtener los Archivos .md --> Retorna un Arreglo Vacio o con Archivos .md', () => {
    expect(validarDirectorio_Archivo('C:\\Users\\N14\\Documents\\GitHub\\LIM016-md-links\\README.md')).toEqual(['C:\\Users\\N14\\Documents\\GitHub\\LIM016-md-links\\README.md']);
  });
  it('4.- validar Directorio o Archivo y Obtener los Archivos .md --> Retorna un Arreglo Vacio o con Archivos .md', () => {
    expect(validarDirectorio_Archivo('C:\\Users\\N14\\Documents\\GitHub\\LIM016-md-links\\dir\\example1.txt')).toEqual([]);
  });
})

describe('extraerLinks', () => {
  it('is a function', () => {
    expect(typeof extraerLinks).toBe('function');
  });
  it('5.- Recorrer un archivosMD y extraer los links --> Retorna un Arreglo con Objetos Vacio o con los Link', () => {
    expect(extraerLinks('C:\\Users\\N14\\Documents\\GitHub\\LIM016-md-links\\dir\\dir_1')).toEqual(links);
  });
  it('5.- Recorrer un archivosMD y extraer los links --> Retorna un Arreglo con Objetos Vacio o con los Link', () => {
    expect(extraerLinks('C:\\Users\\N14\\Documents\\GitHub\\LIM016-md-links\\prueba2.md')).toEqual([]);
  });
})

describe('validarLinks', () => {
  it('is a function', () => {
    expect(typeof validarLinks).toBe('function');
  });
  it('6.- Recorrer un arreglo de links y validar el status y mensaje', () => {
    expect(validarLinks(links)).toEqual(linkss);
  });
})

