import './App.css';
import { BestSellers } from './BestSellers';
import {Header} from './Header';
import { Product } from './Products';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BestSellers/>,
  },
  {
    path: "/product/:productID",
    element: <Product/>,
  },
]);

function App() {
  return (
    <div className='appContainer'>
      <Header/>
      <hr className='devider'/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
