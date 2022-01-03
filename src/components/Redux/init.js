import {  createStore, combineReducers } from "redux";
import milk from './reducer/milk';

const store = createStore(combineReducers({milk}));

export default store;