const middleware = function (req, res, next) {
    if (req.path === '/sign-in' || req.path.startsWith("/resources/") || q.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/sign-in');
    }
};

module.exports = middleware;
