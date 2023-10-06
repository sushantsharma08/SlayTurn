// ProgressBar.js
import React, { useState, useEffect } from 'react';
import './ProgressBar.css';
import { css } from '@emotion/react';
import { BarLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const ProgressBar = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to mimic server loading
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the duration as needed
  }, []);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        {isLoading ? (
          <BarLoader css={override} color={'#007bff'} loading={isLoading} />
        ) : null}
      </div>
    </div>
  );
};

export default ProgressBar;
