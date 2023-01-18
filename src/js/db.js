// Connection to the database
const pgp = require('pg-promise')(/*options*/);
const db = pgp('postgres://admin:admin123@localhost:5432/empower_her');

module.exports = {
    db,
}
