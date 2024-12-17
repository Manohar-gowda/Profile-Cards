import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import {thunk} from 'redux-thunk';
import { authReducer } from './Reducer';
import { profilesReducer } from '../Profiles/Reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    profiles: profilesReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
