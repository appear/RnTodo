import {createStore, combineReducers} from 'redux';
import todo from './reducer';

export const combinedReducers = combineReducers({todo});

export default createStore(combinedReducers);
