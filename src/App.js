import './pages/CalendarPage/Calendar'
import Calendar from './pages/CalendarPage/Calendar';
import Modal from 'react-modal'
import {Provider} from 'react-redux'
import {store} from './redux/store'

Modal.setAppElement('#root')
function App() {
  return (
    <Provider store={store}>
      <Calendar/>
    </Provider>
  );
}

export default App;
