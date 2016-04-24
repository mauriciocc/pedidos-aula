var passport = require('passport');
var User = rootRequire('src/models/User');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var config = rootRequire("config/config");

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
opts.secretOrKey = config.app.secret;
passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
  console.log(jwt_payload);
  User.findOne({id: jwt_payload.id}).then(user => {
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
}));

module.exports = passport.authenticate('jwt', {session: false});
