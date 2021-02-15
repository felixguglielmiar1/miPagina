const express= require('express')
const router= express.Router()  
const {transporter}=require('../milddleware/datos')
const {modificaConfig, traeHomeTwo}= require('../functions/cargadb')
const {body, validationResult}= require('express-validator')

router.post('/modificaContac', async(req, res)=>{
    try{await modificaConfig('46', 'valor_cfg', req.body.descripcionCont)
    res.render('inicio', {msg33: 'cambios realizados con exito'})
}catch(e){res.render('inicio', {msg33: e})}
})
  
router.post('/sendMail',[  
    body('email').
    isEmail().withMessage('verifique el correo')
    .normalizeEmail()
  ], async (req, res, next)=>{
    const errors= validationResult(req)
    if(!errors.isEmpty()){
        return res.render('contacto', { 
        errors: errors.array(),
        email: req.body.email,
        nombre: req.body.nombre,
        comentario: req.body.comentario,
        numero: req.body.numero,
        HomeTree: await traeHomeTwo('contacto')
     }
        )
    }else{
        return next() 
    }},async (req, res)=>{
        try{
        let info = await transporter.sendMail({
            from: '"Contacto mi pagina web 👻" <felixguglielmiar1@gmail.com>', 
            to: "felixguglielmiar3@gmail.com", 
            subject: "Contacto mi pagina web 👻", 
            text: "la persona: "+req.body.nombre+", con numero de telefono: "+req.body.numero+", con mail de contacto: "+req.body.email+" envia el siguiente comentario: "+req.body.comentario 
          })

          res.render('contacto',{
            HomeTree: await traeHomeTwo('contacto'),
            yes: 'su mensaje fue enviado con exito'
          })

          console.log("Message sent: %s", info.messageId);
        }catch(e){
            console.log('error al enviar correo', e)
            res.render('contacto',{
            HomeTree: await traeHomeTwo('contacto'),
            errors: 'En este momento el servidor esta fuera de linea, por favor, intente mas tarde!'
        })



        
    }
})



module.exports =router 