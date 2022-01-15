const path = require('path');
const fs = require('fs');

// 1.- Validar que la Ruta Existe
let validarRuta = (dir) => fs.existsSync(dir);

// 2.- Validar que es Absolutar
let validarAbsoluta = function(dir) {
  if(path.isAbsolute(dir)) {
    return dir
  }
  return path.resolve(dir)
}

// 3.- Validar si es Directorio
let validarDirectorio = (dir) => fs.lstatSync(dir).isDirectory();

// 4.- Recorrer Directorio y Obtener los Archivos .md
const recorrerDirectorio = (dir) => {
  let archivosMD = [];
  if(validarDirectorio(dir)) {
    const directorio = fs.readdirSync(dir);
    directorio.forEach((file) => {
      archivosMD = archivosMD.concat(recorrerDirectorio(path.join(dir, file)));
    });
  }else{
    if(path.extname(dir) === '.md'){
      archivosMD.push(dir);
    }
  }
  return archivosMD;
};

// 5.- Recorrer el Arreglo de archivosMD y obtener los links




console.log(recorrerDirectorio('prueba'))



/*
module.exports = () => {
  // ...
};
 */
