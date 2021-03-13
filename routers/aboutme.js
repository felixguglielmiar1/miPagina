const Conection = require('../database')
const express = require('express')
const fs = require('fs')
const router = express.Router()
const { guardaHerramientas, modificaConfig } = require('../functions/cargadb')
const uploadIMG = require('../functions/uploadIMG')

router.post('/cargaherramienta', async (req, res) => {
    try {
        const herr = await guardaHerramientas('aboutme-h', 'TP-', req.body.TPtwentyseven)
        const modconfig = await modificaConfig(herr.insertId, 'IDhtml', 'TP-' + herr.insertId)
        const boolean = uploadIMG(req.files.imagen, "front/images/aboutme-h-" + herr.insertId + ".jpg", 1, 100, 100)
        if (boolean) {
            res.render('inicio', { msg24: 'se guardo la herramienta' })
        } else {
            res.render('inicio', { msg24: 'ocurrio un error al cargar la imagen' })
        }
    } catch { (e) => { res.render('inicio', { msg16: e }) } }
})

router.post('/DeleteHerr', async (req, res) => {
    try {
        const elimi = await eliminardor('config', req.body.id)
        let img = 'front/images'
        let nomf = 'aboutme-h-' + req.body.id
        fs.readdir(img, function (err, archivos) {
            if (err) {
                onError(err)
                return
            }
            for (let foto in archivos) {
                let fotografia = archivos[foto].split('.')
                if (fotografia[0] == nomf) {
                    let ubicacion = img + "/" + archivos[foto]
                    try {
                        fs.unlinkSync(ubicacion)
                    } catch (e) { console.log(e) }
                }
            }
        })

        res.render('inicio', { msg25: 'herramienta eliminada con id: ' + req.body.id })
    } catch { (e) => { res.render('inicio', { msg25: e }) } }

})

module.exports = router