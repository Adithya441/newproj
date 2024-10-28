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
import { ThemeProvider } from './ThemeContext'
import React from 'react'
import './style.css'

// import state selectors
import { setSetting } from './store/setting/actions'

function App(props) {
  const dispatch = useDispatch()
  dispatch(setSetting())
  
  return (
    <ThemeProvider>
      <div className="App">
        {props.children}  
      </div>
    </ThemeProvider>
  );
}

export default App;
