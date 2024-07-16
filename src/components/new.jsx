import React from 'react';
import '../assets/new.css'
function New() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item dropdown">
            <a href="#" className="nav-link">About &#9662;</a>
            <div className="dropdown-menu">
              <div className="dropdown-row">
                <a href="#">Genesis</a>
                <a href="#">Mission</a>
                <a href="#">Vision</a>
              </div>
              <div className="dropdown-row">
                <a href="#">Objectives</a>
                <a href="#">Board Of Governors</a>
                <a href="#">Director's Message</a>
              </div>
              <div className="dropdown-row">
                <a href="#">Institute Colloquium</a>
                <a href="#">Institution Eminence</a>
                <a href="#">Gallery</a>
              </div>
              <div className="dropdown-row">
                <a href="#">Campus Diary</a>
              </div>
            </div>
          </li>
          {/* <li className="nav-item dropdown">
            <a href="#" className="nav-link">Divisions &#9662;</a>
            <div className="dropdown-menu">
              <div className="dropdown-row">
                <a href="#">Item 1</a>
                <a href="#">Item 2</a>
                <a href="#">Item 3</a>
              </div>
              <div className="dropdown-row">
                <a href="#">Item 4</a>
                <a href="#">Item 5</a>
                <a href="#">Item 6</a>
              </div>
              <div className="dropdown-row">
                <a href="#">Item 7</a>
                <a href="#">Item 8</a>
                <a href="#">Item 9</a>
              </div>
              <div className="dropdown-row">
                <a href="#">Item 10</a>
                <a href="#">Item 11</a>
                <a href="#">Item 12</a>
              </div>
              <div className="dropdown-row">
                <a href="#">Item 13</a>
                <a href="#">Item 14</a>
                <a href="#">Item 15</a>
              </div>
            </div>
          </li> */}

{/* Programmes
PGPM (MBA)
 
PGPM-HR (MBA-HR)
 
PGPBM (MBA for Working Executives)
 
Ph.D (Doctoral Programme)
 
Executive Ph.D (Executive Doctoral Programme) */}


          <li className="nav-item dropdown" id='programmes'>
            <a href="#" className="nav-link">Programmes &#9662;</a>
            <div className="dropdown-menu">
              <div className="dropdown-row">
                <a href="#">PGPM (MBA)</a>
                <a href="#">PGPM-HR (MBA-HR)</a>
                <a href="#">PGPBM (Doctoral Programme)</a>
              </div>
              <div className="dropdown-row" >
                <a href="#">Executive Ph.D (Executive Doctoral Programme) </a>
                <a href="#">Ph.D (Doctoral Programme)</a>
              </div>
            </div>
          </li>
           
{/* People
Director
 
Faculty
 
Students
 
Administration
 
Alumni
 
CVO
 
IEM */}
          <li className="nav-item dropdown" id='programmes'>
            <a href="#" className="nav-link">People &#9662;</a>
            <div className="dropdown-menu">
              <div className="dropdown-row">
                <a href="#">Director</a>
                <a href="#">Faculty</a>
                <a href="#">Students</a>
              </div>
              <div className="dropdown-row">
                <a href="#">Administration</a>
                <a href="#">Alumni</a>
                <a href="#">CVO</a>
              </div>
              <div className="dropdown-row">
                <a href="#">IEM </a>
              </div>
            </div>
          </li>

          {/* Consultancy
Find An Expert
Use Our Instruments
Technology Transfer
Entrepreneurship
Research Park
Research & Industry
Executive Training
CSR
Research
Publications
 
Centers
 
Conference Presentations
 
Working Papers
 
Conferences at IIMT
Placements
Technology Innovation Hub
Projects & Consultancy (DRONA) */}


          <li className="nav-item dropdown">
            <a href="#" className="nav-link">Research & Industry &#9662;</a>
            <div className="dropdown-menu">
              <div className="dropdown-row">
                <a href="#">Find An Expert</a>
                <a href="#">Use Our Instruments</a>
                <a href="#">Technology Transfer</a>
              </div>
              <div className="dropdown-row">
                <a href="#">Entrepreneurship</a>
                <a href="#">Research Park</a>
                <a href="#">Executive Training</a>
              </div>
              <div className="dropdown-row">
                <a href="#">Technology Innovation Hub</a>
                <a href="#">Conferences at IIMT</a>
                <a href="#">Working Papers</a>
              </div>
            </div>
          </li>

{/*  
          Placements
Invites
 
Brochure
 
Top Recruiters
 
Placement Reports
 
Contact Details
 
Travel Info */}


          <li className="nav-item dropdown" id='programmes'>
            <a href="#" className="nav-link">Placements &#9662;</a>
            <div className="dropdown-menu">
              <div className="dropdown-row">
                <a href="#">Invites</a>
                <a href="#">Brochure</a>
                <a href="#">Top Recruiters</a>
              </div>
              <div className="dropdown-row">
                <a href="#">Placement Reports</a>
                <a href="#">Travel Info</a>
                <a href="#">Contact Details</a>
              </div>
            </div>
          </li>


          {/* Media Relations
Guest Lectures
 
Press Releases
 
IIM Tiruchirappalli in News
 
NIRF

Executive Education & Consulting
Executive Education
 
Consulting Activities


International-Relations
 
Partner Networks
 
International Relations Gallery
 
Students Exchange Programme
 
Faculty Exchange Programme
 
Youth Delegation Program
 
Contact Details


*/}


          <li className="nav-item dropdown" >
            <a href="#" className="nav-link">Resources &#9662;</a>
            <div className="dropdown-menu">
              <div className="dropdown-row">
                <a href="#">Media Relations</a>
                <a href="#">Guest Lectures</a>
                <a href="#">Press Releases</a>
              </div>
              <div className="dropdown-row">
                <a href="#">NIRF</a>
                <a href="#">Consulting Activities</a>
                <a href="#">Executive Education</a>
              </div>
              <div className="dropdown-row">
                <a href="#">Partner Networks</a>
                <a href="#">Students Exchange Programme</a>
                <a href="#">Youth Delegation Program</a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link">Contact Us</a>
            {/* <div className="dropdown-menu">
              <div className="dropdown-row">
                <a href="#">Item 1</a>
                <a href="#">Item 2</a>
                <a href="#">Item 3</a>
              </div>
              <div className="dropdown-row">
                <a href="#">Item 4</a>
                <a href="#">Item 5</a>
                <a href="#">Item 6</a>
              </div>
              <div className="dropdown-row">
                <a href="#">Item 7</a>
                <a href="#">Item 8</a>
                <a href="#">Item 9</a>
              </div>
              <div className="dropdown-row">
                <a href="#">Item 10</a>
                <a href="#">Item 11</a>
                <a href="#">Item 12</a>
              </div>
              <div className="dropdown-row">
                <a href="#">Item 13</a>
                <a href="#">Item 14</a>
                <a href="#">Item 15</a>
              </div>
            </div> */}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default New;
