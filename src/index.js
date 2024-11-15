import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './style.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // or any other theme you prefer
import 'primereact/resources/primereact.min.css';  // core PrimeReact styles
import 'primeicons/primeicons.css';  // PrimeIcons for icons


// react-router
import { RouterProvider,createBrowserRouter } from 'react-router-dom';

// app
import App from './App';

//pages-router
import {IndexRouters} from './router/index-routers'


//store
import { Provider } from 'react-redux';
//reducer
import { store } from './store';

import {registerLicense} from '@syncfusion/ej2-base'
registerLicense("ORg4AjUWIQA/Gnt2UlhhQlVMfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTX9Sd0ZhWnpdcXFRRmJb")

const router = createBrowserRouter([
    ...IndexRouters,
],{ basename: process.env.PUBLIC_URL })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      
    <App>
      <RouterProvider router={router}></RouterProvider>
    </App>
    </Provider>
);


reportWebVitals();
