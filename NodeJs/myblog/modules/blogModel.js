// 将对数据库的操作引入进来
const db = require('./database');

module.exports= {
    getBlog(){
        return db.query("select * from t_blog");
    }
}