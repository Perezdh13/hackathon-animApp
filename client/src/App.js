import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import headerBar from './components/headerBar';
import '../src/css/App.css';

function App() {

  const router = createBrowserRouter([

    {
      path:"/",
      element:<>   </>
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

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
