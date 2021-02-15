const express=require('express')  
const uploadIMG=require('../functions/uploadIMG') 
const fs=require('fs')
const router= express.Router()
const {creaReferencias, modificaReferencias, traeReferencias, eliminardor}= require('../functions/cargadb')
router.post('/cargarRef', async(req, res)=>{
try{
    const newRef= await creaReferencias(req.body.TPnombreR, req.body.TPcargoR, req.body.TPreferenciaR, req.body.TPlinkR)
const boolean=uploadIMG(req.files.imagen,"front/images/IMG-REF-"+newRef.insertId+".jpg",1,100,100)
        if(boolean){
            res.render('inicio', {msg26: 'se guardo la nueva referencia'}) 
        }else{
        res.render('inicio', {msg26: 'ocurrio un error al cargar la imagen'}) }
        } catch(e){res.render('inicio', {msg26: e})}
    })


router.post('/modificarRef', async (req, res)=>{
    try{
        await modificaReferencias(req.body.TPnombreR, req.body.TPcargoR, req.body.TPreferenciaR, req.body.TPlinkR, req.body.id)
           const treaRef= await traeReferencias()
           const boolean=uploadIMG(req.files.imagen,"front/images/IMG-REF-"+req.body.id+".jpg",1,100,100)
           if(boolean){
            res.render('inicio', {msg27: "se  modifico con exito la referencia", treaRef: treaRef}) 
        }else{
        res.render('inicio', {msg27: 'ocurrio un error al cargar la imagen',treaRef: treaRef}) }
 
        }catch(e){res.render('inicio', {msg27: e})
}}) 


router.post('/deleteRef', async (req,res)=>{
    try{
     const elimi=await eliminardor('referencias',req.body.id)
     let img='front/images'
     let nomf='IMG-REF-'+req.body.id
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
 
     
     res.render('inicio',{msg28: 'referencia eliminada con id: '+req.body.id} )
 }catch{(e)=>{res.render('inicio',{msg28: e})}}
 
 })

module.exports= router
