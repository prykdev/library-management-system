const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');

const app = express();

// passport config
require('./config/passport')(passport);
const db = require('./config/keys').MongoURI;

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use(bodyParser.json());

// express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
// passport init
app.use(passport.initialize());
app.use(passport.session());

// to use routes
app.use('/', require('./routes/index'));
app.use('/user', require('./routes/user'));
app.use('/loan', require('./routes/loan'));
app.use('/book', require('./routes/book'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`The server is listening on ${PORT}`);
});