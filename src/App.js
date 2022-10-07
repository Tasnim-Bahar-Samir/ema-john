
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Shop from './Components/Shop/Shop'
import Order from './Components/Order/Order';
import Inventory from './Components/Inventory/Inventory';
import Error from './Components/Error/Error';
import { productAndCartLoader } from './Loaders/ProductCartLoader';

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
          path:'inventory',
          element: <Inventory/>
        },
        
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
