const { Conection } = require('../database')
const express = require('express')
const router = express.Router()
router.post('/TP-1-3', async (req, res) => {

    try {
        const rows1 = await Conection.query(modificaConfig('home', 'TP-1', req.body.TPone))
        Conection.off
        console.log(rows1)
        const rows2 = await Conection.query(modificaConfig('home', 'TP-2', req.body.TPtwo))
        Conection.off
        const rows3 = await Conection.query(modificaConfig('home', 'TP-3', req.body.TPtree))
        Conection.off
        res.render('inicio', { msg2: "cambios realizados con exito" })
    }
    catch (error) { res.render('inicio', { msg2: error }) }
})
router.post('/TP-4-5', async (req, res) => {
    try {
        const rows1 = await Conection.query(modificaConfig('home', 'TP-4', req.body.TPfour))
        Conection.off
        const rows2 = await Conection.query(modificaConfig('home', 'TP-5', req.body.TPfive))
        Conection.off
        res.render('inicio', { msg4: "cambios realizados con exito" })
    }

    catch (error) { res.render('inicio', { msg4: error }) }
})


router.post('/TP-6-7', async (req, res) => {
    try {
        const rows1 = await Conection.query(modificaConfig('home', 'TP-6', req.body.TPsix))
        Conection.off
        const rows2 = await Conection.query(modificaConfig('home', 'TP-7', req.body.TPseven))
        Conection.off
        res.render('inicio', { msg5: "cambios realizados con exito" })
    }

    catch (error) { res.render('inicio', { msg5: error }) }
})

router.post('/TP-8-9', async (req, res) => {
    try {
        const rows1 = await Conection.query(modificaConfig('home', 'TP-8', req.body.TPeight))
        Conection.off
        const rows2 = await Conection.query(modificaConfig('home', 'TP-9', req.body.TPnine))
        Conection.off
        res.render('inicio', { msg7: "cambios realizados con exito" })
    }

    catch (error) { res.render('inicio', { msg7: error }) }
})


router.post('/TP-10-11', async (req, res) => {
    try {
        const rows1 = await Conection.query(modificaConfig('home', 'TP-10', req.body.TPten))
        Conection.off
        const rows2 = await Conection.query(modificaConfig('home', 'TP-11', req.body.TPeleven))
        Conection.off
        res.render('inicio', { msg9: "cambios realizados con exito" })
    }

    catch (error) { res.render('inicio', { msg9: error }) }
})



router.post('/TP-12-13', async (req, res) => {
    try {
        const rows1 = await Conection.query(modificaConfig('home', 'TP-12', req.body.TPTwelve))
        Conection.off
        const rows2 = await Conection.query(modificaConfig('home', 'TP-13', req.body.TPThirteen))
        Conection.off
        res.render('inicio', { msg11: "cambios realizados con exito" })
    }

    catch (error) { res.render('inicio', { msg11: error }) }
})

router.post('/TP-14-15', async (req, res) => {
    try {
        const rows1 = await Conection.query(modificaConfig('home', 'TP-14', req.body.TPFourteen))
        Conection.off
        const rows2 = await Conection.query(modificaConfig('home', 'TP-15', req.body.TPFifteen))
        Conection.off
        res.render('inicio', { msg13: "cambios realizados con exito" })
    }

    catch (error) { res.render('inicio', { msg13: error }) }
})

router.post('/TP-16-20', async (req, res) => {
    try {
        const rows1 = await Conection.query(modificaConfig('home', 'TP-16', req.body.TPsixteen))
        Conection.off
        const rows2 = await Conection.query(modificaConfig('home', 'TP-17', req.body.TPinst))
        Conection.off
        const rows3 = await Conection.query(modificaConfig('home', 'TP-18', req.body.TPtwit))
        Conection.off
        const rows4 = await Conection.query(modificaConfig('home', 'TP-19', req.body.TPlink))
        Conection.off
        const rows5 = await Conection.query(modificaConfig('home', 'TP-20', req.body.TPface))
        Conection.off
        res.render('inicio', { msg14: "cambios realizados con exito" })
    }

    catch (error) { res.render('inicio', { msg14: error }) }
})


router.post('/TP-21-22', async (req, res) => {
    try {
        const rows1 = await Conection.query(modificaConfig('exlaboral', 'TP-21', req.body.TPtwentyone))
        Conection.off
        const rows2 = await Conection.query(modificaConfig('exlaboral', 'TP-22', req.body.TPtwentytwo))
        Conection.off
        res.render('inicio', { msg15: "cambios realizados con exito" })
    } catch (error) { res.render('inicio', { msg15: error }) }
}
)


router.post('/TP-23-24', async (req, res) => {
    try {
        const rows1 = await Conection.query(modificaConfig('estudiosRe', 'TP-23', req.body.TPtwentytree))
        Conection.off
        const rows2 = await Conection.query(modificaConfig('estudiosRe', 'TP-24', req.body.TPtwentyfour))
        Conection.off
        res.render('inicio', { msg19: "cambios realizados con exito" })
    } catch (error) { res.render('inicio', { msg19: error }) }
}
)

router.post('/TP-25-26', async (req, res) => {
    try {
        const rows1 = await Conection.query(modificaConfig('aboutme', 'TP-25', req.body.TPtwentyfive))
        Conection.off
        const rows2 = await Conection.query(modificaConfig('aboutme', 'TP-26', req.body.TPtwentysix))
        Conection.off
        res.render('inicio', { msg23: "cambios realizados con exito" })
    } catch (error) { res.render('inicio', { msg23: error }) }
}
)




function modificaConfig(grupo, idhtml, valorT) {
    return 'update config set valor_cfg=' + "'" + valorT + "'" + ' where seccion =' + "'" + grupo + "'" + ' and IDhtml=' + "'" + idhtml + "'"
}

module.exports = router