// TODO replace with DB; currently in-memory store
const users = [];

module.exports = {
    // return all users
    getAllUsers: () => users,

    // return user by ID
    getUserById: (id) => users.find(user => user.id === id),

    // add new user
    addUser: (user) => {
        users.push(user);
        return user;
    },

    // update user status
    updateUserStatus: (id, status) => {
        const user = users.find(user => user.id === id);
        if (user) user.status = status;
        return user;
    }
};