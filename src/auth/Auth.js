const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = rootRequire("src/models/User");

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

var localStrategy = new LocalStrategy(
    function (username, password, done) {
        User.findOne({
            where: {
                email: username
            }
        }).then(function (user) {
            if (!user) {
                return done(null, false, {message: 'Incorrect username.'});
            }
            if (!user.password === password) {
                return done(null, false, {message: 'Incorrect password.'});
            }
            return done(null, user);
        });
    }
);
passport.use(localStrategy);

module.exports = {
    Strategy: localStrategy,
    passport: passport
};