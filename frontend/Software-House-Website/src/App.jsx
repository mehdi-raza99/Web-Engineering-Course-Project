import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
// import About from './pages/About/About';         // Placeholder
// import Services from './pages/Services/Services'; // Placeholder
// import Career from './pages/Career/Career';       // Placeholder
// import Contact from './pages/Contact/Contact';    // Placeholder

function App() {
  const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  // {
  //   path: '/about',
  //   element: <About />,
  // },
  // {
  //   path: '/services',
  //   element: <Services />,
  // },
  // {
  //   path: '/career',
  //   element: <Career />,
  // },
  // {
  //   path: '/contact',
  //   element: <Contact />,
  // },

  ])
  return <RouterProvider router={router} />;
}

export default App
