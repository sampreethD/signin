const passport = require('passport');
const Google = require('passport-google-oauth20').Strategy;
const keys = require('./keys')

passport.use(
    new Google({
        //options for strategy
        clientID: keys.clientID,
        clientSecret: keys.clientSecret,
        callbackURL:'http://127.0.0.1:3000/auth/google/redirect'
    }, (accessToken, refreshToken, profile, cb) => {
        //callback from passport.
        console.log('user data can be found in profile',profile)
    })
)