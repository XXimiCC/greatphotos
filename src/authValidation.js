import Auth from './sources/Auth';
import {successCheckUser} from './actions/user';

export default function accessor(store) {
    const defaultPublicRoute = '/login';
    const defaultPrivateRoute = '/home';

    return {
        onlyLoggedUser: (nextState, replace, callback) => {
            let state = store.getState();

            if (!state.get('user').get('currentUser')) {
                Auth.check().then((user) => {
                    store.dispatch(successCheckUser(user));
                    callback();
                })
                .catch(function () {
                    replace(defaultPublicRoute);
                    callback();
                });
            } else {
                callback();
            }
        },
        onlyGuest: (nextState, replace, callback) => {
            let state = store.getState();

            if (state.get('user').get('currentUser')) {
                replace(defaultPrivateRoute);
            } else {
                Auth.check().then((user) => {
                    store.dispatch(successCheckUser(user));
                    replace(defaultPrivateRoute);
                    callback();
                })
                .catch(function () {
                    callback();
                });
            }
        }
    }
}