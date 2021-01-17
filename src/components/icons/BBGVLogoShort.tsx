import React from 'react';

import { Colors, HexColors } from 'constants/Colors';

interface Props {
  color: Colors;
  className?: string;
}

const BBGVLogoShort: React.FC<Props> = ({ color, className = '' }) => {
  return (
    <svg
      className={className}
      width="100"
      height="100"
      viewBox="0 0 110 40"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0,52.43a37.54,37.54,0,0,1,1-5.65,43.67,43.67,0,0,1,3.3-7.51,5.79,5.79,0,0,1,5.6-2.85c2.63.1,5.27,0,8.11,0V34.31c0-5.91-.21-11.84.18-17.73.61-9,8.38-15.84,17.48-16a17.84,17.84,0,0,1,18,15.46,17.84,17.84,0,0,1-18,20.43H18.17v2c-.09,6.57,0,13.15-.36,19.71a31.32,31.32,0,0,1-2,8.14,10.57,10.57,0,0,1-5.19,5.93H8c-1.21-.92-2.75-1.62-3.56-2.81a24.85,24.85,0,0,1-3-6.2A54.88,54.88,0,0,1,0,56.41Z" />
    </svg>
  );
};

export default BBGVLogoShort;
