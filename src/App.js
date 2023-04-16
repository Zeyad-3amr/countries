import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout/RootLayout';
import CountryInfo from './components/CountryInfo/CountryInfo';
import Body from './components/Pages/Body/Body';
import classes from './App.module.css';
import DarkModeContext from './store/darkMode-context';
import { useContext } from 'react';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: ':code',
        element: <CountryInfo />,
      },
    ],
  },
]);
function App() {
  const ctx = useContext(DarkModeContext);

  return (
    <div className={ctx.isDark ? classes.darkMode : classes.lightMode}>
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
