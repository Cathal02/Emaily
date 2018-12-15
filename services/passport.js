const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')
const passport = require('passport')
const mongoose = require('mongoose')

const User = mongoose.model('users')

// This will store a cookie containing the user ID
// in our session after login is complete
passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  // This is called during every request
  // It obtains a user object from the user id we serialized earlier
  // the user object is stored in req.user

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(null, user);
    });
  });

passport.use (
    new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
         const existingUser = await User.findOne({googleID: profile.id});
            
        if(!existingUser) {
            const user = await User.create({googleID: profile.id}).save()
            return done(null, user)
        }
        
        done(null, existingUser)
        
               
    })
)    
