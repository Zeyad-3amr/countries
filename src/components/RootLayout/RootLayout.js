import { Outlet } from 'react-router-dom';
import Title from '../Title/Title';
const RootLayout = () => {
  return (
    <>
      <Title />
      <Outlet />
    </>
  );
};

export default RootLayout;
