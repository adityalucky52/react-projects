
import { Outlet } from 'react-router-dom';
import Headers from '../Components/Headers';
import Footers from './Footers';


const AppLayout = () => {
  return (
    <>
    
    <Headers/>
    <Outlet/>
    <Footers/>
    
    </>
  );
};

export default AppLayout;