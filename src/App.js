
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Shop from './Components/Shop/Shop'
import Order from './Components/Order/Order';
import Inventory from './Components/Inventory/Inventory';
import Error from './Components/Error/Error';
import { productAndCartLoader } from './Loaders/ProductCartLoader';
import Signup from './Components/SignUp/Signup';
import SignIn from './Components/SignIn/SignIn';
import PrivateRoutes from './Routes/PrivateRoutes';
import Shipping from './Components/Shipping/Shipping';

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element:<Main/>,
      errorElement:<Error/>,
      children:[
        {
          path: '/',
          element: <Shop/>
        },
        {
          path:'/shop',
          element: <Shop/>
        },
        {
          path:'orders',
          loader: productAndCartLoader,
          element: <Order/>
        },
        {
          path:'/shipping',
          element:<PrivateRoutes><Shipping></Shipping></PrivateRoutes>
        },
        { 
          path:'inventory',
          element: <PrivateRoutes><Inventory/></PrivateRoutes>
        },
        {
          path: '/signup',
          element:<Signup/>
        },
        {
          path:'/signin',
          element:<SignIn/>
        }
        
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router= {router}></RouterProvider>
    </div>
  );
}

export default App;
