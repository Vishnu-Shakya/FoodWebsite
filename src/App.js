import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainComponenets from './Componenets/MainComponents';
import {BrowserRouter,routes,route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <MainComponenets/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
