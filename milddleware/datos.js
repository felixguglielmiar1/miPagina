  var host  = ''
  var user = ''
  var password= '' 
  var database = ''
  const nodemailer = require("nodemailer")

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: '', 
      pass: '', 
    },
  }); 
try{  
  transporter.verify().then(()=>{
    console.log('Listo para enviar mails')
  })} catch(e){console.log(e)}

  module.exports= {host, user, password, database, transporter}
 







