import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import AddAnimals from './components/AddAnimals';
import FooterBar from './components/FooterBar';
import './css/footer.css';
import Cards from './components/Cards';
import Carrousel from './components/Carrousel';
import Contact from './components/Contact';
import '../src/css/App.css';
import AboutMe  from './components/AboutMe';
import Report  from './components/ReportarAbuso';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/contact.css'
import fakeAPI from './json/fakeAPI'



function App() {


localStorage.setItem("animals",JSON.stringify(fakeAPI));




  const router = createBrowserRouter([
    {
      path:"/",
      element:<><HeaderBar /> <Carrousel/> <Cards/> <FooterBar/> </>
    },
    {
      path:"/aboutUs",
      element:<> <HeaderBar /> <AboutMe /> <FooterBar/>  </>
    },
    {
      path: "/contact",
      element: <> <HeaderBar /> <Contact/><FooterBar/> </>
    },
    {
      path:"/anuncia",
      element:<> <HeaderBar /> <AddAnimals/> <FooterBar/></>
    },
    {
      path:"/report",
      element:<> <HeaderBar /> <Report/><FooterBar/></>
    }

  ]);

  return (
    <div className="App">
          <RouterProvider router={router} />
    </div>
  );
}

export default App; 

