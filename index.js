const app = require('express')();
const port = 3000;
app.set('view engine', 'ejs');
const auth_route = require('./routes/auth-routes');
const passportsetup = require('./config/passport-setup')
// creating a default route
const passport = require('passport');
app.use('/auth',auth_route)

app.get('/', (req, res) => {
    console.log('req reached ');

    res.render('home')
})


app.listen(port, () => {
    console.log(`The server is listening to ${port}`);
})