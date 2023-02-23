import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import AddAnimals from './components/AddAnimals';
import FooterBar from './components/FooterBar';
import Search from './components/Search';
import Carrousel from './components/Carrousel';
import HomePage from './components/HomePage';
import SingleAnimal from './components/SingleAnimal';
import Contact from './components/Contact';
import '../src/css/App.css';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import AboutMe  from './components/AboutMe';
>>>>>>> about-me

function App() {

  const router = createBrowserRouter([

    {
      path:"/",
<<<<<<< HEAD
      element:<><AddAnimals/></>
    },
    {
      path:"/singleAnimal",
      element:<> <HeaderBar/> <SingleAnimal/> <FooterBar/> </>
=======
      element:<><HeaderBar /> <AddAnimals/>  </>
    },
    {
      path:"/about",
      element:<>  <AboutMe />  </>
>>>>>>> about-me
    },
    {
      path:"/",
      element:<>   </>
    },
  ])

  return (
    <div className="App">
      
     
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
