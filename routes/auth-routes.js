const router = require('express').Router();
const passport = require('passport')
//login

router.get('/login', (req, res) => {
    res.render('login');
});
//logout
router.get('/logout', (req, res) => {
    res.send('logged out')
})
//login with google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.send('success')
});

module.exports = router;