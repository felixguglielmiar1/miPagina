const gm = require('gm')
const fs=require('fs')
function uploadIMG(img, dir,red,alt,anch){
    let imagen= img
    let nombre= imagen.name.split('.')
    let extencion= nombre[nombre.length-1]
    let extenciones= ['PNG','jpg','jped','JPED','png','JPG']
    let resultado=false;
    console.log(extencion,extenciones.indexOf(extencion))
    if (extenciones.indexOf(extencion)!= -1){
    imagen.mv(dir, (error)=>{
        if (error){
            resultado= false
        }},resultado=true)
        if(red==1){
         imagen=gm(dir).resize( anch,alt,'@').write(dir, function(err) {
            if (err) {
              return console.dir(err);
            }
          })
        }}
else{
    resultado= false 
}return resultado
}

module.exports=uploadIMG