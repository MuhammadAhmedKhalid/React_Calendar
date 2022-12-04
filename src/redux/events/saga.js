import {put, takeEvery} from 'redux-saga/effects'
import {ADD_ALLDAY_EVENT_REQUEST, ADD_EVENT_FAILURE, ADD_EVERYDAY_EVENT_REQUEST, ADD_NORMAL_EVENT_REQUEST, 
    ADD_WEEKLY_EVENT_REQUEST, GET_EVENTS_REQUEST, GET_EVENT_FAILURE, GET_EVENT_SUCCESS} from './types'

function* getEvents(){
    try {
        let data = yield fetch('http://localhost:8080/getEvents')
        data = yield data.json();
        yield put({type: GET_EVENT_SUCCESS, data})
    } catch (error) {
        yield put({ type: GET_EVENT_FAILURE, message: error.message })
        }
}

function* addNormalEvent(){
    try {
    
    } catch (error) {
        yield put({type: ADD_EVENT_FAILURE, message: error.message})
    }
}

function* addAlldayEvent(){
    try {
        
    } catch (error) {
        yield put({type: ADD_EVENT_FAILURE, message: error.message})
    }
}

function* addEverydayEvent(){
    try {
        
    } catch (error) {
        yield put({type: ADD_EVENT_FAILURE, message: error.message})
    }
}

function* addWeeklyEvent(){
    try {
        
    } catch (error) {
        yield put({type: ADD_EVENT_FAILURE, message: error.message})
    }
}

export function* eventsSaga(){
    yield takeEvery(GET_EVENTS_REQUEST, getEvents)
    yield takeEvery(ADD_NORMAL_EVENT_REQUEST, addNormalEvent)
    yield takeEvery(ADD_ALLDAY_EVENT_REQUEST, addAlldayEvent)
    yield takeEvery(ADD_EVERYDAY_EVENT_REQUEST, addEverydayEvent)
    yield takeEvery(ADD_WEEKLY_EVENT_REQUEST, addWeeklyEvent)
}