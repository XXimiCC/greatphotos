import * as actions from '../actions/actionTypes';

export function imagesList(state, action) {
    switch (action.type) {
        case actions.ADD_ITEMS_INTO_HOME_LIST:
            /** @var array **/
            let list = state.get('list');

            return state.set('list', list.push.apply(list, action.payload.items));
        default:
            return state;
    }
}