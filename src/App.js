import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Children, Fragment } from 'react';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Alerts from './components/Alerts'
import './App.css'
 
const App = ()=> {
  return (
      <AuthState>
        <AlertState>
        <BrowserRouter>
          <Fragment>  
            <Navbar title='Fullstack App' icon='fab fa-node-js' />
            <div className='container'>
            <Alerts />
              <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/about' component={About}   />
                <Route path='/register' component={Register}   />
                <Route path='/login' component={Login}   />
              </Switch>
            </div>
          </Fragment>        
        </BrowserRouter>
        </AlertState>
      </AuthState>
    
   
  );
}

export default App;
