import {combineReducers} from 'redux'
import {eventsReducer} from './events/reducer'

export const rootReducers = combineReducers({
    events: eventsReducer
})