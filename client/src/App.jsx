import { useState, useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ProductDetail from './pages/ProductDetail';
import RootLayout from './Components/RootLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
           <Route index element={<ProductDetail />}/>
        </Route>
  ))

const App = () => { return (<RouterProvider router={router} />)};

export default App;