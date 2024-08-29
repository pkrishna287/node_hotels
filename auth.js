const passport = require('passport')
const Localstrategy = require('passport-local').Strategy
const Person = require('./models/Person')

passport.use(new Localstrategy(async (username,password,done)=>{
    //authentication logic
    try{
      //console.log('Received credentials:',username, password);
      const user = await Person.findOne({username: username});
      if(!user)
        return done(null,false, {message:'Incorrect Username:'})
      
      const isPasswordMatch = await user.comparePassword(password);
      if(isPasswordMatch){
        return done(null,user);
      }else{
        return done(null,false,{message: 'Incorrect password'})
      }
    }catch(err){
      return done(err);
    }
  }));

module.exports = passport