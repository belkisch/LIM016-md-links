// 7.- Verificar cantidad de links rotos
const conteo = (arrayLinks) => {
  const total = arrayLinks.map((op) => op.href);
  const unique = new Set(arrayLinks.map(arrayLinks => arrayLinks.href));
  let broken = 0;
  arrayLinks.forEach((element) => {
    if (element.ok === 'FAIL') broken += 1;
  });
  return {
    total: total.length,
    unique: unique.size,
    broken: broken
  }
}
module.exports =  conteo;
