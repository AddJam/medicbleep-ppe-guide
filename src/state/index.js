import { combineReducers } from 'redux'
import PpeReducer from './PpeReducer';

const rootReducer = combineReducers({
    PpeReducer: PpeReducer,
});
export default rootReducer;