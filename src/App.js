import React from 'react';
// import { Redirect, history } from 'react-router';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { Home, Experience, Contact } from './pages/index';
// import { createBrowserHistory } from "history";
import './App.css';

class App extends React.Component {
  render(){

    return(

      <div>
        <Router>
          <div>
            <nav id="sitenav">
              <div className="name"><span>Neo Owens</span></div>
                <ul className="navlist" id="pNavList">
                  <li><Link className="nav-link" to="/home">Home</Link></li>
                  <li><Link className="nav-link" to="/experience">Experience</Link></li>
                  <li><Link className="nav-link" to="/contact">Contact</Link></li>
                </ul>
            </nav>

            <Switch>
              <Route path="/about" component = {Contact} />
              <Route path="/experience" component = {Experience} />
              <Route path="/" component={Home}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
