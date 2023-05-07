import * as actions from './actionsTypes';
export const approveTerms = state => ({
    type: actions.TERMS_APPROVE,
    payload: {state: true}
});
export const disapproveTerms = state => ({
    type: actions.TERMS_DISAPPROVE,
    payload: { state: false }
});
