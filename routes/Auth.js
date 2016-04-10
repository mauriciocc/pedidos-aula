var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var User = rootRequire('src/models/User');

passport.use(new BasicStrategy(
  function (userid, password, done) {
    User.findOne({where: {email: userid}}).then(user => {
      if (!user) {
        return done(null, false);
      }
      if (user.password !== password) {
        return done(null, false);
      }
      return done(null, user);
    }, (err) => {
      return done(err);
    });
  }
));

module.exports = passport.authenticate('basic', {session: false});
