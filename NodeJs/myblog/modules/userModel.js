// 将对数据库的操作引入进来
const db = require('./database');

module.exports= {
    getUserByNameAndPassword(username, password){
        return db.query("select * from t_user where username=? and password=?", [username, password]);
    },
    saveUser(user){
        return db.query("insert into t_user set ?", user);
    },
    getUserByUsername(username){
        return db.query("select * from t_user where username=?", [username]);
    }
}