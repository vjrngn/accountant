const passport = require("passport");

const jwtStrategy = require('./strategies/jwt');

passport.use('jwt', jwtStrategy);

module.exports = passport;
