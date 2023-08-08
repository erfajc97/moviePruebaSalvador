import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './src/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieDetail from './src/Pages/MovieDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/movieDetail',
    element: <MovieDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
