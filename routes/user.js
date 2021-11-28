const express = require('express');
const router = express.Router();

const User = require('../models/User');
router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('userHomePageView');
    } else {
        res.redirect('/login');
    }
});

router.post('/search', (req, res) => {
    const searchData = req.body;
    const {email, firstName, lastName, role} = searchData;
    console.log(searchData, email, firstName, lastName, role);
    const searchCriteria = {};
    for (const key in searchData) {
        if (searchData.hasOwnProperty(key)) {
            searchCriteria[key] = searchData[key];
        }
    }
    const errors = [];
    User.findOne(searchCriteria)
        .then(user => {
            if (!user) {
                errors.push(`There is no user with the given combination of details`);
                res.end(`Could not find any user with given details`);
            } else {
                
            }
        })
});

module.exports = router;