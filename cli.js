#!/usr/bin/env node

const mdLinks = require('./index');
const conteo = require('./link');
const figlet = require('figlet');
const [,,...args] = process.argv;
const nroArgs = args.length;
const ruta = args[0];
let options = {
  validate: false,
  stats: false
}
figlet('Bienvenido  a   mdLinks!!', function(err, data) {
  if (err) {
      console.log('Algo salió mal...');
      console.dir(err);
      return;
  }
  console.log(data)
});

if (nroArgs > 0 && nroArgs < 4) {
  setTimeout(() => {if(nroArgs === 1) {
    mdLinks(ruta, options)
      .then((response) =>{
        return response.forEach((element)=> {
          let path = element.path,
              href = element.href,
              text = element.text;
          return console.log(path  + ' ' + href + ' ' + text);
        });
      })
      .catch(err => console.log(err))
  } else if(nroArgs === 2) {
    switch(args[1]) {
      case '--validate':
        options.validate = true;
        mdLinks(ruta, options)
          .then((response) =>{
            return response.forEach((element)=> {
              let path = element.path,
                  href = element.href,
                  text = element.text;
                  status = element.status;
                  ok = element.ok;
              return console.log(path  + ' ' + href + ' ' + ok + ' ' + status + ' ' + text);
            });
          })
          .catch(err => console.log(err))
      break;
      case '--stats':
        options.validate = false;
        mdLinks(ruta, options)
          .then( (response) =>{
            const cant = conteo(response);
            return console.log('Total: '+ cant.total+'\n'+'Uniques: '+ cant.unique);
          })
         .catch(err => console.log(err))
      break;
      case '--help':

      break;
      default:
        console.log('Comando Inválido. Intente con la opción --help')
      break;
    }
  } else if(nroArgs === 3) {
    if(args[1] === '--stats' && args[2] === '--validate'){
      options.validate = true;
      mdLinks(ruta, options)
        .then((response) =>{
          const cant = conteo(response);
         return console.log('Total: ' +cant.total + '\n' + 'Uniques: ' + cant.unique +'\n'+ 'Broken: ' + cant.broken );
        })
        .catch(err => console.log(err))
    } else {
      console.log('Solicita Ayuda.  mdLinks --help')
    }
  }}, 2000)

} else {
  console.log('Comandos Incorrectos o Inválidos. Intente con la opción --help');
}
