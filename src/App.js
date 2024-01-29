import './App.css'
import { Provider } from 'react-redux';
import Todolist from './Todolist';
import store from './store/store';
import Counter from './Counter';

function App() {
  return (
    <div className="border border-2 border-danger p-3" id='main'>
        <Provider store={store}>
            
            <Todolist></Todolist>
            <Counter></Counter>
        </Provider>
    </div>
  );
}

export default App;
