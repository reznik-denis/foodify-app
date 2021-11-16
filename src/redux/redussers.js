import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {favourites} from './actions';
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


export default combineReducers({
    random: randomReducer,
    favourites: favouritesRedusser,
    loading,
    error,
})