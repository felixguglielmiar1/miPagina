const express = require('express')
const router = express.Router()
const uploadIMG = require('../functions/uploadIMG')


router.post('/upload-HF', (req, res) => {
    const boolean = uploadIMG(req.files.imagen, "front/images/felix.jpg", 0, 0, 0)
    if (boolean) {
        res.render('inicio', { msg: 'cambio procesado' })
    } else {
        res.render('inicio', { msg: 'no se procesado el cambio' })
    }
})

router.post('/upload-Hp', (req, res) => {
    const boolean = uploadIMG(req.files.imagen, "front/images/hero.jpg", 0, 0, 0)
    if (boolean) {
        res.render('inicio', { msg3: 'cambio procesado' })
    } else {
        res.render('inicio', { msg3: 'no se procesado el cambio' })
    }
})
router.post('/upload-s1', (req, res) => {

    const boolean = uploadIMG(req.files.imagen, "front/images/portfolio-01.jpg", 1, 950, 1100)
    if (boolean) {
        res.render('inicio', { msg6: 'cambio procesado' })
    } else {
        res.render('inicio', { msg6: 'no se procesado el cambio' })
    }
})

router.post('/upload-s2', (req, res) => {

    const boolean = uploadIMG(req.files.imagen, "front/images/portfolio-02.jpg", 1, 950, 1100)
    if (boolean) {
        res.render('inicio', { msg8: 'cambio procesado' })
    } else {
        res.render('inicio', { msg8: 'no se procesado el cambio' })
    }
})

router.post('/upload-s3', (req, res) => {

    const boolean = uploadIMG(req.files.imagen, "front/images/portfolio-03.jpg", 1, 950, 1100)
    if (boolean) {
        res.render('inicio', { msg10: 'cambio procesado' })
    } else {
        res.render('inicio', { msg10: 'no se procesado el cambio' })
    }
})

router.post('/upload-s4', (req, res) => {

    const boolean = uploadIMG(req.files.imagen, "front/images/portfolio-04.jpg", 1, 950, 1100)
    if (boolean) {
        res.render('inicio', { msg12: 'cambio procesado' })
    } else {
        res.render('inicio', { msg12: 'no se procesado el cambio' })
    }
})



module.exports = router