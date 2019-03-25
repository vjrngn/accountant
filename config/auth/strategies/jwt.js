const User = require("../../../models/User");
const JWTStrategy = require("passport-jwt").Strategy;
const Extractor = require("passport-jwt").ExtractJwt;

const { JWT_SECRET } = process.env;

module.exports = new JWTStrategy(
  {
    jwtFromRequest: Extractor.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
  },
  async function(payload, done) {
    try {
      const user = await User.findById(payload.sub);

      if (!user) {
        return done(null, false);
      }

      done(null, user);
    } catch (e) {
      done(null, false);
    }
  }
);
