import React from 'react';
import logo from '../assets/img/logo.webp'; // Make sure you have the logo image in the appropriate path

function Header() {
  const aboutMenuItems = [
    ['Introduction', 'Vision & Mission', 'Director\'s Message', 'Books & Videos', 'Organization'],
    ['Institution of Eminence', 'Institute Colloquium/ Lectures', 'Digital Photo Archive'],
    ['Insight', 'Campus Diary', 'Kshitij'],
  ];

  const divisionsMenuItems = [
    ['Division 1', 'Division 2', 'Division 3', 'Division 4', 'Division 5'],
    ['Division 6', 'Division 7', 'Division 8'],
    ['Division 9', 'Division 10'],
  ];

  // Define menu items for other sections similarly

  return (
    <header className="header">
      <div className="header-main">
        <img src={logo} alt="IIT Bombay" className="header-logo" />
        <div className="header-title">
          <h1>भारतीय प्रबंधन संस्थान तिरुचिरापल्ली</h1>
          <h1>Indian Institute of Management Tiruchirappalli</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
