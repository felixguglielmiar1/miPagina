
const  {Conection}  = require('./database')
const passport = require('passport')
const localStrategy=require('passport-local').Strategy

passport.use('local.signin', new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
},async (email, password, done)=>{
    

let sqll='select * from usuario where email='+"'"+email+"'"
const rows = await Conection.query(sqll)
Conection.off

if(rows.length > 0 ){
    usuario=rows[0]
    const validPass= password == usuario.password
    
    if(validPass){
    const user= {email:email, password:password}
    user.id=rows[0].id 
    return done(null, user)
}else{ 
    
 return console.log(done(null, false, {message: 'no existe el usuario o la contraseña es incorrecta' })  )
   
} 
}else{
 
  return done(null, false,{message: 'no existe el usuario o la contraseña es incorrecta' })  

}

}))
passport.serializeUser((user, done ) =>{
    done(null, user.id)
})

passport.deserializeUser( async(id,done)=>{
    let sqll='select id, email from usuario where id='+id
    const rows= await Conection.query(sqll)
    Conection.off
    done(null, rows[0])
})

