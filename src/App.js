
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Shop from './Components/Shop/Shop'
import Order from './Components/Order/Order';
import Inventory from './Components/Inventory/Inventory';

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element:<Main/>,
      children:[
        {
          path:'/',
          element: <Shop/>
        },
        {
          path:'orders',
          element: <Order/>
        },
        {
          path:'inventory',
          element: <Inventory/>
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
