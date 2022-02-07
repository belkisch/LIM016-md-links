const conteo = require('../link');


const links = [
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


describe('Verificar si es una funcion ', () => {
  it('Debería ser una función', () => {
    expect(typeof conteo).toBe('function');
  });
  it('Debería retornar un objeto con el total de links total, únicos y broken', () => {
    expect(conteo(links)).toEqual(expect.objectContaining({ total: 12, unique: 8, broken : 3}));
  });
});


