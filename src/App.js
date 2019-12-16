import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './routes/Home';
import './App.css';

class App extends Component {
  render(){
    return(

    <div className="App">
      <nav className="nav" id="homebodynav">
        <div className="name"><span>Neo Owens</span></div>
        <div className="top-right-nav">
          <ul className="navlist nav">
            <li><a className="nav-link active" href="#">Home</a></li>
            <li><a className="nav-link" href="#">Projects</a></li>
            <li><a className="nav-link" href="#">About Me</a></li>
          </ul>
        </div>
      </nav>
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
    )
  }
}

export default App;
