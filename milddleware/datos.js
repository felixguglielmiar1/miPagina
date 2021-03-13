var host = 'remotemysql.com'
var user = '9A58XK5UhN'
var password = 'PEGe6nuCvW'
var database = '9A58XK5UhN'
const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: 'felixguglielmiar1@gmail.com',
    pass: 'lkcucrlkroovvmqi',
  },
});
try {
  transporter.verify().then(() => {
  console.log('Listo para enviar mails')
  })
} catch (e) { console.log(e) }

module.exports = { host, user, password, database, transporter }








