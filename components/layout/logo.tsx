import React from 'react';
import CustomLogo from '../shared/logo.svg'; // Update with the correct path

const Logo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  return <img src={CustomLogo} alt="Custom Logo" {...props} />;
};

export default Logo;