import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, BrowserRouter, Routes} from 'react-router-dom'
import Login from './components/Login/Login';
import RegisterJury from './components/Register';
import Dashboard from './components/Home Page/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      {/* <Switch> */}
      
        <Route path='/login' Component={Login} />
        <Route path='/register' Component={RegisterJury} />
        <Route path='/homepage' Component={Dashboard}/>
       
     {/* // </Switch> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
