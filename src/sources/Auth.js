import lStorage from 'store';
import q from 'q';
import User from './User';

const LS_CURRENT_USER = 'CURRENT_USER';

class Auth {
    static login(username, password) {
        return User.findUser({username, password})
            .then(function (user) {
                lStorage.set(LS_CURRENT_USER, user);

                return user;
            })
            .catch(function () {
                return q.reject({password: 'Incorrect username or password'});
            })
    }

    static check() {
        let defer = q.defer(),
            currentUser = lStorage.get(LS_CURRENT_USER);

        setTimeout(() => {
            return currentUser ? defer.resolve(currentUser) : defer.reject();
        }, 1000);

        return defer.promise;
    }

    static logout() {
        let defer = q.defer(),
            currentUser = lStorage.get(LS_CURRENT_USER);

        lStorage.remove(LS_CURRENT_USER);


        setTimeout(() => {
            currentUser ? defer.resolve(currentUser) : defer.reject();
        }, 1000);

        return defer.promise;
    }
}

export default Auth;

