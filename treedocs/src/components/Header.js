import React, { useState } from 'react';
import "../styles/Header.css";

function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="header-container">
        <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/Images/${isHovered ? 'DarkLogo.png' : 'LightLogo.png'}`}
            alt="Light Logo"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <div className='title'> TreeLog Documents</div>
    </div>
  );
}


export { Header };
