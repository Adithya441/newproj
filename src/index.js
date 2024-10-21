import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

// react-router
import { RouterProvider,createBrowserRouter } from 'react-router-dom';

// app
import App from './App';

//pages-router
import {IndexRouters} from './router/index-routers'


//store
import { Provider } from 'react-redux';
//reducer
import { store } from './store'

const router = createBrowserRouter([
    ...IndexRouters,
],{ basename: process.env.PUBLIC_URL })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App>
      <RouterProvider router={router}></RouterProvider>
    </App>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
