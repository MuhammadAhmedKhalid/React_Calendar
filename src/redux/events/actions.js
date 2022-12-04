import {ADD_ALLDAY_EVENT_REQUEST, ADD_EVERYDAY_EVENT_REQUEST, ADD_NORMAL_EVENT_REQUEST, ADD_WEEKLY_EVENT_REQUEST, 
    GET_EVENTS_REQUEST} from './types'

export const getEventsRequest = () => {
    return{
        type: GET_EVENTS_REQUEST
    }
}

export const addNormalEventRequest = () => {
    return{
        type: ADD_NORMAL_EVENT_REQUEST
    }
}

export const addAlldayEventRequest = () => {
    return{
        type: ADD_ALLDAY_EVENT_REQUEST
    }
}

export const addEverydayEventRequest = () => {
    return{
        type: ADD_EVERYDAY_EVENT_REQUEST
    }
}

export const addWeeklyEventRequest = () => {
    return{
        type: ADD_WEEKLY_EVENT_REQUEST
    }
}