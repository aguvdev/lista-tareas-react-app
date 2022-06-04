import React from "react";
import '../stylesheets/Logo.css';

const Logo = ({ titulo }) => {
    return (
      <div className='logo-container'>
        <h1 className='logo'>{titulo}</h1>
      </div>
    );
};

export default Logo;