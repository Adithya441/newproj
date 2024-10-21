// css
import './assets/css/bootstrap.min.css'
import './assets/css/typography.css'
import './assets/css/style.css'
import './assets/css/style-rtl.css'
import './assets/css/responsive.css'
import './assets/fullcalendar/core/main.css'
import './assets/fullcalendar/daygrid/main.css'
import './assets/fullcalendar/timegrid/main.css'
import './assets/fullcalendar/list/main.css'
import './assets/css/flatpickr.min.css'
import "choices.js/public/assets/styles/choices.min.css";
import "flatpickr/dist/flatpickr.css";

// Redux Selector / Action
import { useDispatch } from 'react-redux';

// import state selectors
import { setSetting } from './store/setting/actions'

function App(props) {
  const dispatch = useDispatch()
  dispatch(setSetting())
  
  return (
    <div className="App">
      {props.children}  
    </div>
  );
}

export default App;
