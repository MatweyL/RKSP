import * as actions from './actionsTypes';

export default function reducer(state = {}, action) {
    switch (action.type) {
        case actions.TERMS_APPROVE:
            return {'state': true};
        case actions.TERMS_DISAPPROVE:
            return {'state': false};
        default:
            return state;
    }
}