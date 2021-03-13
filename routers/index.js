
const express = require('express')
const router = express.Router()
const { traeHome, traelink, traeExlaboral, traeExlaboralDet, traeExlaboralDetLwLu, traeTiyDesEstudiosRe, traeEstudiosRe, traeEstudiosReDet, traeHomeTwo, traeReferencias, traeAdicional, traeReferenciasdet } = require('../functions/cargadb')
const passport = require('passport')
const { body, validationResult } = require('express-validator')

router.get('/', async (req, res) => {
  const home = await traeHome()
  res.render('index', { home: home })
})
router.get('/tlink', async (req, res) => {

  const link = await traelink('TP-19')
  res.redirect(link[0].valor_cfg)
})
router.get('/tinst', async (req, res) => {

  const link = await traelink('TP-17')
  res.redirect(link[0].valor_cfg)
})
router.get('/tface', async (req, res) => {

  const link = await traelink('TP-20')
  res.redirect(link[0].valor_cfg)
})
router.get('/ttwit', async (req, res) => {

  const link = await traelink('TP-18')
  res.redirect(link[0].valor_cfg)
})
router.get('/estudiosRealizados', async (req, res) => {
  const TyDestudios = await traeTiyDesEstudiosRe()
  const EstudiosRe = await traeEstudiosRe()
  res.render('estudios', { TyDestudios: TyDestudios, EstudiosRe: EstudiosRe })
})

router.get('/exlaboral', async (req, res) => {
  const Exlaboral = await traeExlaboral()
  const ExlaboralDeta = await traeExlaboralDet()

  res.render('exlaboral', { ExlaboralDeta: ExlaboralDeta, Exlaboral: Exlaboral })
})

router.get('/map-exLab/:id', async (req, res) => {
  const { id } = req.params
  const LwLu = await traeExlaboralDetLwLu(id)
  res.redirect(LwLu[0].link_ubi)

})


router.get('/web-exLab/:id', async (req, res) => {
  const { id } = req.params
  const LwLu = await traeExlaboralDetLwLu(id)
  res.redirect(LwLu[0].link_web)

})
router.get('/referencia/:id', async (req, res) => {
  const { id } = req.params
  const LinkRef = await traeReferenciasdet(id)
  res.redirect(LinkRef[0].Link_ref)
})

router.get('/web-esrs/:id', async (req, res) => {
  const { id } = req.params
  const LWLF = await traeEstudiosReDet(id)
  res.redirect(LWLF[0].link_w)
})

router.get('/fac-esrs/:id', async (req, res) => {
  const { id } = req.params
  const LWLF = await traeEstudiosReDet(id)
  res.redirect(LWLF[0].link_u)
})

router.get('/inicio', (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.redirect('/login')
  }
  return next()
},

  async (req, res) => {
    const exLaboralDet = await traeExlaboralDet()
    const estudiosRe = await traeEstudiosRe()
    const HomeTwo = await traeHomeTwo('aboutme-h')
    const trearef = await traeReferencias()
    const traeAdic = await traeAdicional()
    res.render('inicio', { exLaboralDet: exLaboralDet, estudiosRe: estudiosRe, HomeTwo: HomeTwo, treaRef: trearef, traeAdic: traeAdic })
  })
router.get('/login', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.redirect('/inicio')
  }
  return next()
},
  async (req, res) => {
    res.render('login')
  })
router.get('/contactar', async (req, res) => {
  const HomeTree = await traeHomeTwo('contacto')
  res.render('contacto', { HomeTree: HomeTree })
})



router.post('/signin', [
  body('email').
    isEmail().withMessage('verifique el correo')
    .normalizeEmail(),
  body('password').isLength(4).withMessage('la contraseña tiene que tener  4 caracteres o más'),

], (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.render('login', {
      errors: errors.array(),
      email: req.body.email
    }
    )
  } else {
    return next()
  }

}, passport.authenticate('local.signin', {
  successRedirect: '/inicio',
  failureRedirect: '/login',
  failureFlash: true

}))


router.get('/aboutme', async (req, res) => {
  const HomeTwo = await traeHomeTwo('aboutme')
  const HomeTree = await traeHomeTwo('aboutme-h')
  const trearef = await traeReferencias()
  const traeAdic = await traeAdicional()

  res.render('aboutme', { HomeTwo: HomeTwo, trearef: trearef, traeAdic: traeAdic, HomeTree: HomeTree })
}

)
module.exports = router 
