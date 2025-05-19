import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, BrowserRouter, Routes} from 'react-router-dom'
import Login from './components/Login';
import RegisterJury from './components/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      {/* <Switch> */}
        <Route path='/login' Component={Login} />
        <Route path='/register' Component={RegisterJury} />
     {/* // </Switch> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
