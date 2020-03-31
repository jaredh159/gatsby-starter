import React from 'react';
import { Helmet } from 'react-helmet';

const Layout: React.FC = ({ children }) => (
  <>
    <Helmet>
      <html lang="en" />
      <title>SITE_TITLE</title>
    </Helmet>
    {children}
  </>
);

export default Layout;
