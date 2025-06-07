import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import MainLayout from './components/MainLayout';
import Services from './pages/Services/Services';
import Career from './pages/Career/Career';     
import Contact from './pages/Contact/Contact';   

function App() {
  const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },{
        path: 'services',
        element: <Services />
      },
      {
        path: '/career',
        element: <Career />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ]
  },
  // {
  //   path: '/about',
  //   element: <About />,
  // },
  // {
  //   path: '/services',
  //   element: <Services />,
  // }
  // {
  //   path: '/contact',
  //   element: <Contact />,
  // },

  ])
  return <RouterProvider router={router} />;
}

export default App
