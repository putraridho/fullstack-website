const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const keys = require('./config/keys')

const app = express() 

passport.use(new GoogleStrategy({
  clentID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  userProfileURL: 'https://googleapis.com/oauth2/v3/userinfo'
}))

const PORT = process.env.PORT || 5000
app.listen(PORT)