
import './App.css';
import ShopppingProducts from './ShopppingProducts';
import store from './store/store';
import { Provider } from 'react-redux';
import AddCarts from './AddCarts';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

function App() {
  return (
      <div>
          <Provider store={store}>
              <Outlet></Outlet>
          </Provider>
      </div>
  );
}

export default App;
