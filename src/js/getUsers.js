const { db } = require('./db');

// Get all users
async function getUsers() {
    db.any('SELECT * FROM users')
        .then(data => {
            res.json({
                status: 'success',
                data: data,
                message: 'Retrieved ALL users'
            })
        })
        .catch(err => {
            return next(err);
        })
}

module.exports = {
    getUsers
}