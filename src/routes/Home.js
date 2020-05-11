import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory, Industry } from 'react-router';
import portfolioPhoto from '../imgs/proflephotos/portfolioPhoto2.jpg';

class Home extends React.Component {
    render() { 
        return(
            <div id="homeDiv">
                <header id="homeHeader">
                    <div className="center">
                        <img src ={portfolioPhoto} className="profilePhoto" />
                        <h2 id="txtName">Neo Owens</h2>
                        <h3 id="txtWorkTitle">Software Developer</h3>
                    </div>
                </header>
                <div className="mainContent">
                    <div className="container" id="aboutMeContainer">
                        <h2 id="aboutMeHeader">About Me</h2>
                        <div className="col sm-col-9" id="aboutMeDetail">
                            Software Developer with natural curiosity of new technology.
                            Three years experience creating web and console applications 
                            for internal clients that display and manipulate date in a database 
                            or a third party application.
                        </div>
                        <div className="col sm-col-3"></div>
                    </div>
                </div>
            </div>
        )
    }

}

export { Home }