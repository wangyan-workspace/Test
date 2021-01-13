class UserServiceOracleImpl {
    add(user) {
        console.log('数据已存入Oracle数据库...');
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
export default UserServiceOracleImpl;
