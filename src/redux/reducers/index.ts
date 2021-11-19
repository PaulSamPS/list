import {combineReducers} from 'redux'
import dbReducer from './dbReducer'

export const rootReducer = combineReducers({
    db: dbReducer
})
