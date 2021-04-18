import './App.css';
import Navbar from './Components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Profile from './Components/Profile'


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar/>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
