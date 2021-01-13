import User from './model/User.js'
import UserService from './service/UserService.js'
import UserServiceMySQLImpl from './service/impl/UserServiceMySQLImpl.js'
import UserServiceOracleImpl from './service/impl/UserServiceOracleImpl.js'


// let user1 = new User(1,"lisi","12345");
let user2 = new User(2,"wangwu","56789");

// let userService = new UserServiceMySQLImpl();
// userService.add(user1);
// 当要更改数据库时，只需更改对应的数据库的类名即可，使用接口即可在统一的标准下，对数据库进行操作
let userService = new UserServiceOracleImpl();
userService.add(user2);