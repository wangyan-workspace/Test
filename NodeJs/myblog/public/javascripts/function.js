//从路由routes文件夹中提出来的模块，实现特定功能，每个模块的代码重复率太高需要封装一个方法(query)，可以简化代码量
function getUserData(username, password) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) { // not connected!
                reject(err);
            } else {
                connection.query(
                    // "select * from t_user where username='' "+username+" and password=''"+password+"", 
                    `select * from t_user where username='${username}' and password='${password}'`,  //模板字符串
                    function (error, results) {
                        connection.release(); //释放连接，放回pool中
                        if (error) {
                            reject(error);
                        } else {

                            // // console.log(results);
                            // if (results.length > 0) {
                            //     // console.log('登陆成功！');
                            //     // ctx.body = "登陆成功！"
                            //     resolve("登陆成功!");
                            // } else {
                            //     // console.log('登录失败，用户名或密码不正确');
                            //     // ctx.body = "登录失败，用户名或密码不正确"
                            //     resolve("登录失败，用户名或密码不正确");
                            // }

                            resolve(results);
                        }
                    });
            }
        });
    })
}

function saveUser(user) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) { // not connected!
                reject(err);
            } else {
                connection.query(
                    // `insert into t_user(username,password,nickname) values('${user.username}','${user.password}','${user.nickname}')`,  //模板字符串
                    `insert into t_user set ?`, user,
                    function (error, results) {
                        connection.release(); //释放连接，放回pool中
                        if (error) {
                            reject(error);
                        } else {
                            resolve(results);
                        }
                    });
            }
        });
    })
}

function getBlogData() {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) { // not connected!
                reject(err);
            } else {
                connection.query(
                    `select * from t_blog`,  //模板字符串
                    function (error, results) {
                        connection.release(); //释放连接，放回pool中
                        if (error) {
                            reject(error);
                        } else {
                            resolve(results);
                        }
                    });
            }
        });
    })
}

