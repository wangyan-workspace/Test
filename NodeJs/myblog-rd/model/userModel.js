const db = require('../model/database');

module.exports = {
    getByNameAndPassword(username, password) {
        return db.query('select * from t_user where username=? and password=?', [username, password]);
    },
    saveUser(user){
        return db.query("insert into t_user set ?", user);
    },
    getUserByUsername(username){
        return db.query("select * from t_user where username=?", [username]);
    }
}