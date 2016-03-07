import localStorage from 'store';
import q from 'q';

const LS_USERS = "USER";

class User {
    static findUser(login, password) {
        return User.getUsers().then(function (users) {
            let finedUser;

            for(let i = 0;i < users.length;i++) {
                let user = users[i];

                if (user.login === login && user.password === password) {
                    finedUser = user;
                    break;
                }
            }

            return finedUser ? q.when(finedUser) : q.reject();
        })
    }

    static getUsers() {
        return q.when(localStorage.get(LS_USERS));
    }

    static createUser(login, password, firstName, lastName) {
        return User.getUsers().then(function (users) {
            let user = {
                login,
                password,
                firstName,
                lastName
            };

            users.push(user);
            localStorage.set(LS_USERS, users);

            return user;
        })
    }
}

export default User;

