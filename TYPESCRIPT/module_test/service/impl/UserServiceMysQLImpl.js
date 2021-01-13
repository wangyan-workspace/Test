class UserServiceMySQLImpl {
    add(user) {
        // console.log(`username is ${user.getUsername()},password is ${user.getPassword()},已添加...`);
        localStorage.setItem('user', JSON.stringify(user)); //存到localStorage中
        console.log('数据已存入MySQL数据库...');
        return true;
    }
    delete(userId) {
        throw new Error("Method not implemented.");
    }
    update(userId) {
        throw new Error("Method not implemented.");
    }
    get(username, password) {
        throw new Error("Method not implemented.");
    }
}
export default UserServiceMySQLImpl;
