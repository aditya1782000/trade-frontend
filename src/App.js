import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Auth from "./components/Auth";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Root from "./Pages/root";

const router = createBrowserRouter([
  {
   path: '/',
   element: <Root />,
   children: [
     {
       path: '/user/login',
       element: <Auth />
     },
     {
       path: '/user/signup',
       element: <Signup />
     },
     {
       path: '/user/profile',
       element: <Profile />
     }
   ],
  }
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;