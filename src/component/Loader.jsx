import React from 'react';
 // Adjust the path according to your project structure
import './Loader.css';

export const Loader = () => {
  return (
    <div className="loader-container">
      <img src="loader.gif" alt="Loading..." className="loader-gif" />
    </div>
  );
};

export default Loader;
