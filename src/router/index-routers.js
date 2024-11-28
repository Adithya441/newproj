// layouts
import DefaultLayout from "../layouts/default-layout";
// pages
import LoginPage from '../views/modules/authentication/login';
import { AppRouter } from './app-router';  // Assuming this is your main router that includes child routes
import PrivateRoute from "../views/modules/authentication/PrivateRoute"; // Private route component

export const IndexRouters = [
  {
    path: '',
    element: <LoginPage />, // Public route, no need for protection
  },
  {
    path: '',
    element: <PrivateRoute />, // Wrap DefaultLayout with PrivateRoute to protect child routes
    children: [
      {
        path: '', // This will act as the default page for authenticated users
        element: <DefaultLayout />, // Layout that will contain other routes
        children: [
          ...AppRouter,  // This includes your other routes (protected routes)
        ],
      },
    ],
  },
];
