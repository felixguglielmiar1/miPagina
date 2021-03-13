const express = require('express')
const server = express()
const hbs = require('handlebars')
hbs.registerHelper("equal", require("handlebars-helper-equal"))
const exphbs = require('express-handlebars')

const session = require('cookie-session')
const port = process.env.PORT || 3000

const passport = require('passport')
const localStrategy = require('passport-local').Strategy


server.set('trust proxy', 1);

server.use(session({
       secret: 'secret',
       saveUninitialized: true,
       resave: false,
       maxAge: 1000 * 60 * 15,
       cookie: {
              secure: true
       }
}));

const flash = require('express-flash')
server.use(flash())
server.use(passport.initialize())
server.use(passport.session())
require('./passport.js')
server.use(require('express-fileupload')())
server.engine('.hbs', exphbs())
server.set('view engine', '.hbs')
server.use(express.urlencoded({ extended: true }))
server.use(express.static('front'))
server.use(require('./routers/index'))
server.use(require('./routers/upload'))
server.use(require('./routers/modtext'))
server.use(require('./routers/exlabDet'))
server.use(require('./routers/estudios'))
server.use(require('./routers/aboutme'))
server.use(require('./routers/referencias'))
server.use(require('./routers/adicional'))
server.use(require('./routers/contacto'))
server.use(express.json)
server.listen(port, () => {
       console.log('puerto: ' + port)
})           