const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// load user model
const User = require('../models/User');

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
            // match user
            console.log('Inside passport strategy');
            User.findOne({email: email})
                .then(user => {
                    console.log(`User: ${JSON.stringify(user)}`);
                    if (!user) {
                        return done(null, false, {message: 'That email is not registered'});
                    }
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        console.log(`Result of comparison: ${JSON.stringify(isMatch)}`)
                        if (err) throw err;
                        if (isMatch) {
                            return done(null, user, null);
                        } else {
                            return done(null, false, {message: 'The password is invalid'});
                        }
                    })
                })
                .catch(err => console.log(err));
        })
    );
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

}