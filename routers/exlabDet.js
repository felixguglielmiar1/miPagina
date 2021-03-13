const express = require('express')
const fs = require('fs')
const router = express.Router()
const { guardaExperienciaDet, eliminardor, modificaExperiencia, traeExlaboralDet } = require('../functions/cargadb')
const uploadIMG = require('../functions/uploadIMG')

router.post('/TP-cargarDelete', async (req, res) => {
    try {
        const elimi = await eliminardor('ExLaboral', req.body.id)
        let img = 'front/images'
        let nomf = 'menber-' + req.body.id
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


        res.render('inicio', { msg17: 'experiencia eliminada con id: ' + req.body.id })
    } catch { (e) => { res.render('inicio', { msg17: e }) } }

})
router.post('/TP-modificaEx', async (req, res) => {
    try {
        await modificaExperiencia(req.body.EMP, req.body.CAR, req.body.TR, req.body.LW, req.body.LU, req.body.ID)
        const exLaboralDet = await traeExlaboralDet()
        const boolean = uploadIMG(req.files.imagen, "front/images/menber-" + req.body.ID + ".jpg", 1, 500, 500)
        if (boolean) {
            res.render('inicio', { exLaboralDet })
        } else {
            res.render('inicio', { msg18: 'ocurrio un error al cargar la imagen' })
        }
    } catch { (e) => { res.render('inicio', { msg18: e }) } }
})


router.post('/TP-NewExL', async (req, res) => {
    try {
        const newEx = await guardaExperienciaDet(req.body.TPNE, req.body.TPCD, req.body.TPTR, req.body.TPLW, req.body.TPLU)
        const boolean = uploadIMG(req.files.imagen, "front/images/menber-" + newEx.insertId + ".jpg", 1, 500, 500)
        if (boolean) {
            res.render('inicio', { msg16: 'se guardo la nueva experiencia laboral' })
        } else {
            res.render('inicio', { msg16: 'ocurrio un error al cargar la imagen' })
        }
    } catch { (e) => { res.render('inicio', { msg16: e }) } }
})
module.exports = router