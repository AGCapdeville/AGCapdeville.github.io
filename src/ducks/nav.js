import { createAction, handleActions } from "redux-actions";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";


export const setActiveNav = createAction('screen/SET_ACTIVE_NAV');

const initialNavState = 'aboutRef';

export default handleActions({
    [setActiveNav]: (state, action) => state = action.payload,
}, initialNavState);

const selectNav = createSelector(
    state => state.nav,
    nav => nav   
)

export const useNav = () => useSelector(selectNav);

