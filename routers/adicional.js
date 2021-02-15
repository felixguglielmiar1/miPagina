const { adicional}=require('../database')
const express=require('express')
const fs=require('fs')
const router= express.Router() 
const uploadIMG=require('../functions/uploadIMG')
const { body } = require('express-validator')
router.post('/cargarAdi', async (req, res)=>{
    try{const adicionalN= await adicional.create(req.body)
       try{
        const boolean=uploadIMG(req.files.imagen,"front/images/am-adicional-"+adicionalN.dataValues.id+".jpg",1,500,500)
        if(boolean){
            res.render('inicio', {msg29: 'adicional guardado con exito'}) 
        }else{
        res.render('inicio', {msg29: 'ocurrio un error al cargar la imagen'}) }   
       }catch(e){res.render('inicio', {msg29: 'adicional guardado sin imagen'}) }
    }catch(e){
           console.log(e) 
           res.render('inicio',{msg29: e})
}})

router.post('/modificaAdi', async (req, res)=>{
    try{  adicional.update(req.body ,{where:{id: req.body.id}})
    try{
        const boolean=uploadIMG(req.files.imagen,"front/images/am-adicional-"+req.body.id+".jpg",1,500,500)
        if(boolean){
            res.render('inicio', {msg30: 'adicional guardado con exito'}) 
        }else{
        res.render('inicio', {msg30: 'ocurrio un error al cargar la imagen'}) }   
       }catch(e){res.render('inicio', {msg30: 'adicional guardado sin imagen'}) }
    }catch(e){
           console.log(e) 
           res.render('inicio',{msg30: e})
}})
router.post('/eliminaAdi', async (req, res)=>{
    try{
    const result= await adicional.destroy({where: {id: req.body.id}})
    let img='front/images'
    let nomf='am-adicional-'+req.body.id
    fs.readdir(img, function (err, archivos) {
        if (err) {
        onError(err)
        return
        }
        for(let foto in archivos){
            let fotografia=archivos[foto].split('.')
            if(fotografia[0]==nomf){
                let ubicacion=img+"/"+archivos[foto]
                try{fs.unlinkSync(ubicacion)
                }catch (e){console.log(e)}
            }
        }
        })

    
    res.render('inicio',{msg31: 'experiencia eliminada con id: '+req.body.id} )
}catch{(e)=>{res.render('inicio',{msg31: e})}}

})


    


module.exports=router