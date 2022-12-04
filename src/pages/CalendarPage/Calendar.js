import React, { useEffect } from 'react'
import FullCalendar from '../../components/Calendar/FullCalendar';
import {useDispatch, useSelector} from 'react-redux'
import { getEventsRequest } from '../../redux/events/actions';

function Calendar() {
  const dispatch = useDispatch()
  const isLoading = useSelector(state=>state.events.loading)
  
  useEffect(()=>{
    dispatch(getEventsRequest())
  },[])

  return (
    <div>
      {
        isLoading ? <h1>LOADING...</h1> : <FullCalendar />
      }
    </div>
  )
}

export default Calendar