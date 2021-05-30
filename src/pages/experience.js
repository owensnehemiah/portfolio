import React from 'react';
import ReactDOM from 'react-dom';

class Experience extends React.Component {
    render() { 
        return(
            <div class="container">
                <div class="row justify-content-center">
                    {/* <h1>Projects...</h1> */}
                    <div class="jobexperiencecontentdiv"id="pesiexperiencediv">
                        <h3><strong>PARTNER ENGINEERING AND SCIENCE</strong></h3>
                        <h5><strong>SOFTWARE DEVELOPER | SEPT 2017 – CURRENT</strong></h5>
                        <section>
                            <li>Design, develop, and test web and console applications using C#, ASP.NET, SQL Server Database, JavaScript, Node.JS, jQuery, and HTML.</li>
                            <li>Modify existing software, sql server processes, and web applications for better efficiency and performance.</li> <br />
                            <li>Develop ad-hoc queries, views, functions, and stored procedures to process data efficiently.</li> <br />
                            <li>Develop, test, and maintain Windows Service application to monitor file activity in folders using C# and Visual Studios.</li> <br />
                            <li>Designed, developed, and tested a timesheet web application for International employees to increase payroll processing efficiency using .NET Framework, C#, Javascript, HTML, and CSS.</li> <br />
                            <li>Designed, developed, and tested a web application that calculates commission for project staff to be paid and stores data to be recalled.</li> <br />
                            <li>Develop and maintain dynamic bookings and employee utilization reports for Ops Managers and Executives by importing data, creating data model, 
                            and creating interactive visuals for report pages.</li>
                        </section>
                    </div>{/*end of pesiexeriencediv */}
                </div>{/*  end of row */}
                <div class="row justify-content-center">
                    <div class="jobexperiencecontentdiv" id="uhgexeriencediv">
                        <h3>UNITEDHEALTH GROUP</h3>
                        <h5><strong>APPLICATION DEVELOPER | OCT 2015 – MARCH 2017</strong></h5>
                        <div>
                            <section>
                                <li>Designed and maintained client side screens as well as claim processing  applications.</li> <br />
                                <li>Collaborated with a team of analysts, developers, subject matter experts, and leaders for functional specifications and solutioning.</li> <br />
                                <li>Developed unit test plans and manipulated data to test requirements and quality of product.</li><br />
                                <li>Retrieved, stored, and manipulated data in a claims database.</li> <br />
                                <li>Analyzed EDI 837 Institutional and Professional Health Care Claims.</li> <br />
                                <li>Supported triage and resolution of defects to refine and improve quality using Application Life Cycle software.</li> <br />
                            </section>
                            <div><strong>SYSTEMS ANALYST | MAY 2014 – OCT 2015</strong></div>
                            <section>
                                Obtained, interpreted, and analyzed business requirements and issues. <br />
                                Prepared and executed test cases to ensure the quality of claims processing applications. <br />
                                Acted as the liaison between Business and Systems Analysts, Developers, and project management groups. <br />
                                Performed documentation and communication activities for technical and business personnel. <br />
                                Collaborated with a team of analysts, developers, subject matter experts, and leaders for solution assessment. <br />
                                Developed Unit Test Plans to test coding changes and manipulate data to ensure desired results using debugger. <br />
                                Supported triage and resolution of defects to refine and improve quality using Application Life Cycle software. <br />
                            </section>
                        </div>
                    </div> {/*end of uhgexeriencediv */}
                </div>
     
            </div>
        )
    }

}

export { Experience }