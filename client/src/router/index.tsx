import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../page/Home';

const router = createBrowserRouter([
  { path: '/', element: <Home />, },
  { path: '/about', element: <div>About</div>, },
]);

const Router = () => (
  <RouterProvider router={router} />
)

export default Router;