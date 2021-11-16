import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {favourites, modal} from './actions';
import { random } from './operations';
import {initialState} from './initialState'

const randomReducer = createReducer(initialState, {
    [random.fulfilled]: (state, action) => {
        return action.payload ? action.payload : state;
    },
})

const favouritesRedusser = createReducer('', {
    [favourites]: (state, action) => [action.payload, ...state]
})

const loading = createReducer(false, {
    [random.pending]: () => true,
    [random.fulfilled]: () => false,
    [random.rejected]: () => false,
});

const error = createReducer(null, {
    [random.rejected]: (_, action) => action.payload,
    [random.pending]: () => null,
});

const modalRedussser = createReducer(false, {
    [modal]: (_, action) => action.payload,
})


export default combineReducers({
    random: randomReducer,
    favourites: favouritesRedusser,
    modal: modalRedussser,
    loading,
    error,
})