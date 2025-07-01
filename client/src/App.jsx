import { useState, useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import SingleProduct from './pages/SingleProduct';
import RootLayout from './Components/RootLayout';
import Cart from './pages/Cart';


const router = createBrowserRouter(
  createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
           <Route index element={<SingleProduct />}/>
           <Route path='cart' element={<Cart />}/>
        </Route>
  ))

const App = () => { return (<RouterProvider router={router} />)};

export default App;