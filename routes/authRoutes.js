const passport = require('passport')

module.exports = app => {

    // This handles getting authentication details
    // (gmail profile) from google
    app.get("/auth/google", passport.authenticate('google', {
        scope: ['profile', 'email']
    }))
    
    app.get("/auth/google/callback", passport.authenticate('google'), (req, res) => {
        res.redirect('/surveys')
    })
    
    app.get("/api/logout",  (req, res) => {
        // Provided by passport
        req.logout()
        res.redirect('/')
    })

    app.get("/api/current_user", (req, res) => {
        res.send(req.user)
    })

     
}
