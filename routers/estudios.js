const express = require('express')
const fs = require('fs')
const router = express.Router()
const { guardaEstudiosRealizados, traeEstudiosRe, modificaEstudios } = require('../functions/cargadb')
const uploadIMG = require('../functions/uploadIMG')
router.post('/TP-NewEsR', async (req, res) => {
    let certificados = 0
    try {
        if (req.files.imagen) {
            certificados = 1
        }
    } catch (e) { }
    try {

        const estudio = await guardaEstudiosRealizados(req.body.TPNI, req.body.TPTO, req.body.TPPE, req.body.TPDP, req.body.TPLW, req.body.TPLU, req.body.TPPC, req.body.TPLC, certificados)
        if (certificados == 1) {
            const boolean = uploadIMG(req.files.imagen, "front/images/certificado-" + estudio.insertId + ".jpg", 1, 500, 500)
            if (!boolean) {
                console.log('error al cargar imagen de certificado')
            }
        }
        const booleantwo = uploadIMG(req.files.imagenIn, "front/images/Institucion-" + estudio.insertId + ".jpg", 1, 500, 500)
        if (booleantwo) {
            res.render('inicio', { msg20: 'se guardo el estudio realizado con exito' })
        } else {
            res.render('inicio', { msg20: 'ocurrio un error al cargar la imagen de la institucion' })
        }

    }
    catch (e) { res.render('inicio', { msg20: e }) }

})



router.post('/TP-DeleteEstudio', async (req, res) => {
    try {
        const elimi = await eliminardor('EstudiosRealizados', req.body.id)
        console.log('se elimino de la base de datos')
        let img = 'front/images'
        let nomf = 'Institucion-' + req.body.id
        let nomc = 'certificado-' + req.body.id
        fs.readdir(img, function (err, archivos) {
            if (err) {
                onError(err)
                return
            }
            for (let foto in archivos) {
                let fotografia = archivos[foto].split('.')
                if (fotografia[0] == nomf || fotografia[0] == nomc) {
                    let ubicacion = img + "/" + archivos[foto]
                    try {
                        fs.unlinkSync(ubicacion)
                    } catch (e) { console.log(e) }
                }
            }
        })
        res.render('inicio', { msg21: 'estudio realizado eliminado con id: ' + req.body.id })
    } catch { (e) => { res.render('inicio', { msg21: e }) } }

})

router.post('/TP-ModEsR', async (req, res) => {
    let certificados = 0
    try {
        if (req.files.imagen) {
            certificados = 1
        }
    } catch (e) { }

    try {
        await modificaEstudios(req.body.TPNI, req.body.TPTO, req.body.TPPE, req.body.TPDP, req.body.TPLW, req.body.TPLU, req.body.TPPC, req.body.TPLC, certificados, req.body.id)
        const EstudiosRe = await traeEstudiosRe()
        if (certificados == 1) {
            const boolean = uploadIMG(req.files.imagen, "front/images/certificado-" + req.body.id + ".jpg", 1, 500, 500)
            if (!boolean) {
                console.log('ocurrio un error modificando el certificado')
            }
        }

        const booleantwo = uploadIMG(req.files.imagenIn, "front/images/Institucion-" + req.body.id + ".jpg", 1, 500, 500)
        if (booleantwo) {
            res.render('inicio', { estudiosRe: EstudiosRe, msg22: 'se guardo el estudio realizado' })
        } else {
            res.render('inicio', { estudiosRe: EstudiosRe, msg22: 'ocurrio un error al cargar la imagen' })
        }
    } catch { (e) => { res.render('inicio', { msg22: e }) } }
})



module.exports = router