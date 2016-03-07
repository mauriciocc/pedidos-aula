var passport = require('passport');

module.exports = function (router) {

    router.get('/sign-in', function(req, res, next) {
        res.render('sign-in', { title: 'Express' });
    });

    router.post('/sign-in',
        passport.authenticate('local', {
            successRedirect: '/home',
            failureRedirect: '/sign-in',
            failureFlash: true
        })
    );
};
