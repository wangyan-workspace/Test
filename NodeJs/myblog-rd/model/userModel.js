const db = require('../model/database');

module.exports = {
    getByNameAndPassword(username, password) {
        return db.query('select * from t_user where username=? and password=?', [username, password]);
    }
}