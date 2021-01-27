// 对数据库的相关操作
// 引入mysql
let mysql = require('mysql');
// 将db.config配置文件里的数据解构出来
let {HOST,USER,PASSWORD,DATABASE} = require('../config/db.config')
// 创建mysql链接池
let pool = mysql.createPool({
    connectionLimit: 10,
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'myblog'
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE
});

function query(sql,values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) { // not connected!
                reject(err);
            } else {
                connection.query(
                    sql, values,
                    function (error, results) {
                        connection.release(); //释放连接，放回pool中
                        if (error) {
                            reject(error);
                        } else {
                            resolve(results);
                        }
                    }
                );
            }
        });
    })
}

module.exports = {
    query:query
};