import {ADD_EVENT_FAILURE, ADD_NORMAL_EVENT_REQUEST, ADD_EVENT_SUCCESS, 
    GET_EVENTS_REQUEST, GET_EVENT_FAILURE, GET_EVENT_SUCCESS, ADD_ALLDAY_EVENT_REQUEST, ADD_WEEKLY_EVENT_REQUEST, ADD_EVERYDAY_EVENT_REQUEST} from './types'

const eventsInitialState = {
    loading: false,
    events: [],
    error: ''
}

export const eventsReducer = (state = eventsInitialState, action) => {
    switch(action.type){
        case GET_EVENTS_REQUEST: return{
            ...state,
            loading: true
        }
        case GET_EVENT_SUCCESS: return{
            ...state,
            loading: false,
            events: action.data,
            error: ''
        }
        case GET_EVENT_FAILURE: return{
            ...state,
            loading: false,
            events: [],
            error: action.message
        }
        case ADD_NORMAL_EVENT_REQUEST || ADD_ALLDAY_EVENT_REQUEST || ADD_WEEKLY_EVENT_REQUEST || ADD_EVERYDAY_EVENT_REQUEST: return{
            ...state,
        }
        case ADD_EVENT_SUCCESS: return{
            ...state,
            events: action.data,
            error: ''
        }
        case ADD_EVENT_FAILURE: return{
            ...state,
            events: [],
            error: action.message
        }
        default: return state
    }
}