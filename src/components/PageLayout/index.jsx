import React from 'react';
import './PageLayout.scss';

const PageLayout = ({ children }) => {
  return (
    <div className="pageLayuot">
      <div className="main">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
