const gm = require('gm')
function uploadIMG(img, dir, red, alt, anch) {
  let imagen = img
  let nombre = imagen.name.split('.')
  let extencion = nombre[nombre.length - 1]
  let extenciones = ['PNG', 'jpg', 'jped', 'JPED', 'png', 'JPG']
  let resultado = false;
  if (extenciones.indexOf(extencion) != -1) {
    imagen.mv(dir, (error) => {
      if (error) {
        resultado = false
      }
    }, resultado = true)   
    if (red == 1) {
      imagen = gm(dir).resize(anch, alt, '@').write(dir, function (err) {
        if (err) {
          return console.dir(err);
        }
      })
    }
  }
  else {
    resultado = false
  } return resultado
}

module.exports = uploadIMG