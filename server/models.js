const db = require('../data/db-config');

const find = () => {
    return db.select('*').from('users-info');
}

const findByUsername = (username) => {
    return db.select('*').from('users-info').where({ username: username });
}

const addUser = (user) => {
    return db('users-info').insert(user);
}

module.exports = {
    find,
    findByUsername,
    addUser
}
