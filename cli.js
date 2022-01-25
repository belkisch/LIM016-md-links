#!/usr/bin/env node

const nroArgs = process.argv.length;
const ruta = process.argv[1];
const opcion1 = process.argv[2];
const opcion2 = process.argv[3];


if (nroArgs > 0 && nroArgs < 4) {
  if(nroArgs === 1) {

  } else if(nroArgs === 2) {
    switch(opcion1) {
      case '--validate':

      break;

      case '--stats':

      break;

      case '--help':

      break;

      default:
        console.log('Comando Inválido. Intente con la opción --help')
      break;
    }
  } else if(nroArgs === 3) {

  }
} else {
  console.log('Comandos Incorrectos o Inválidos. Intente con la opción --help');
}

