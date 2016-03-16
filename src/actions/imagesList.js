import * as actions from './actionTypes';

export function addItemsToList(items) {
    return {
        type: actions.ADD_ITEMS_INTO_HOME_LIST,
        payload: {
            items
        }
    }
}