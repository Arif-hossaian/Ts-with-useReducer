import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

export interface HeaderProps {}

const Main: React.FC<HeaderProps> = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);

  return (
    <div
      id="nc-chifis-header"
      className="nc-Header lg:sticky lg:top-0 w-full lg:left-0 lg:right-0 z-40"
    >
      <Helmet>
        <title>Practice section</title>
      </Helmet>

      {/* <main className={pathname !== '/' ? 'pt-21 sm: pt-10' : ''}>
        {children}
      </main> */}
    </div>
  );
};

export default Main;
