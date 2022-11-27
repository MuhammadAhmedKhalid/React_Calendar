import './pages/CalendarPage/Calendar'
import Calendar from './pages/CalendarPage/Calendar';
import Modal from 'react-modal'

Modal.setAppElement('#root')
function App() {
  return (
    <div>
      <Calendar/>
    </div>
  );
}

export default App;
