import Mainbord from './components/mainboard/mainboard';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';


function App() {
 

  return (
    <>
      <div>
        
        <Provider store={store}>
          <Mainbord />
        </Provider>
      </div>
    </>
  );
}

export default App;
