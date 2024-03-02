import './App.css';
import RegisterForm from './RegisterForm';
import Data from './Data';
import { Outlet } from 'react-router';

function App() {
  return (
    <div>
        <Outlet></Outlet>
    </div>
  );
}

export default App;
