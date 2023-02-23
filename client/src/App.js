import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AddAnimals from './components/AddAnimals';
import FooterBar from './components/FooterBar';
import Search from './components/Search';
import Carrousel from './components/Carrousel';
import HomePage from './components/HomePage';
import SingleAnimal from './components/SingleAnimal';
import '../src/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";







function App() {
  const router = createBrowserRouter([

    {
      path:"/",
      element:<> <AddAnimals/></>
    },
    {
      path:"/",
      element:<>   </>
    },
    {
      path:"/",
      element:<>   </>
    },
  ])

  return (
    <div className="App">
      <h1>animApp </h1>
      <Carrousel/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
