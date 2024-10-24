// layout
import DefaultLayout from "../layouts/default-layout"
// pages
//import Index from '../views/index';
import LoginPage from '../views/modules/authentication/login';
import { AppRouter } from './app-router';
// UI Elements


export const IndexRouters = [
    {
        path: '',
        element : <LoginPage />,
    },
    {
        path: '',
        element : <DefaultLayout />,
        children : [
            

          ...AppRouter
        ],
    }
]
