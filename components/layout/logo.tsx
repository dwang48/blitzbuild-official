import React from 'react';
import Image from 'next/image'; // Import next/image
import CustomLogo from '../shared/logo.svg'; // Update with the correct path

// Update the props type if necessary, depending on how you use the Logo component
const Logo: React.FC<Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>> = (props) => {
  // Replace img with Image component
  // You might need to adjust width/height props based on your logo's aspect ratio
  // or remove them if you control size via className
  return <Image src={CustomLogo} alt="Custom Logo" {...props} />;
};

export default Logo;