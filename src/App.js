import React, { Component, useReducer } from 'react';
// import { Redirect, history } from 'react-router';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory } from 'react-router-dom';
import { Home, About, Projects } from './routes/index';
import { createBrowserHistory } from "history";
import './App.css';

const history = createBrowserHistory();

class App extends Component {
  render(){
    return(

    <div className="App">
      <nav id="homebodynav">
        <div className="name"><span>Neo Owens</span></div>
        {/* <div className="top-right-nav"> */}
          <ul className="navlist" id="pNavList">
            <li><a className="nav-link active" href="/home">Home</a></li>
            <li><a className="nav-link" href="/projects">Projects</a></li>
            <li><a className="nav-link" href="/about">About Me</a></li>
          </ul>
          {/* <Router history = {history}>
            <Route exact path="/" component={App} >
              <Route path="home" component = {Home} />
              <Route path="about" component = {About} />
              <Route path="projects" component = {Projects} />
            </Route>
          </Router> */}
        {/* </div> */}
      </nav>
      <Router history = {history}>
        <Switch>
          {/* <Route exact path="/" /> */}
          {/* <Redirect from='/' to='/home' component = {Home} /> */}
          <Route exact path="/home" component = {Home} />
          <Route exact path="/about" component = {About} />
          <Route exact path="/projects" component = {Projects} />
        </Switch>
      </Router>
    </div>
    )
  }
}

export default App;
