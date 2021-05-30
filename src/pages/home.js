import React from 'react';
// import ReactDOM from 'react-dom';
import portfolioPhoto from '../imgs/proflephotos/portfolioPhoto2.jpg';

class Home extends React.Component {
    render() { 
        return(
            <div>
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
                        Experienced developer with 5+ years experience. Specializing in .NET web and console application development using ASP.NET, C#, and SQL Server. 
                        Searching for an opportunity to learn and apply new and emerging technologies. 
                        Experience as a developer has enhanced my ability to design, develop, test, and deploy console and web applications. 
                        </div>
                        <div className="col sm-col-3"></div>
                    </div>
                </div>
            </div>
        )
    }

}

export { Home }