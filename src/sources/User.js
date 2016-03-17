import lStorage from 'store';
import q from 'q';
import _ from 'lodash';

const LS_USERS = 'USERS_LIST';

class User {
    static findUser(fields) {
        return User.getUsers().then((users) => {
            let finedUser = _.find(users, fields);

            return finedUser ? q.when(finedUser) : q.reject('Not found');
        })
    }

    static getUsers() {
        let defer = q.defer();

        setTimeout(() => {
            defer.resolve(lStorage.get(LS_USERS) || []);
        }, 1000);

        return defer.promise;
    }

    static createUser(user) {
        return User.getUsers().then((users) => {
            let findedUserIndex = _.findIndex(users, ['username', user.username]);

            if (~findedUserIndex) {
                return q.reject({username: 'User with this username already exists'});
            } else {
                users.push(user);
                lStorage.set(LS_USERS, users);
                console.log('USERS', users);

                return q.when(user);
            }
        })
    }
}

export default User;

