import { combineReducers } from 'redux'
import PpeReducer from './Response'

const rootReducer = combineReducers({
  PpeReducer: PpeReducer,
})
export default rootReducer
