import lStorage from 'store';
import q from 'q';

const LS_USERS = 'USERS_LIST';

class User {
    static findUser(username, password) {
        return User.getUsers().then(function (users) {
            let finedUser;

            for(let i = 0;i < users.length;i++) {
                let user = users[i];

                if (user.username === username && user.password === password) {
                    finedUser = user;
                    break;
                }
            }

            return finedUser ? q.when(finedUser) : q.reject();
        })
    }

    static getUsers() {
        return q.when(lStorage.get(LS_USERS) || []);
    }

    static createUser(user) {
        return User.getUsers().then(function (users) {
            users.push(user);
            lStorage.set(LS_USERS, users);
            console.log('USERS', users);
            return user;
        })
    }
}

export default User;

