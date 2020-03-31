import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  title: string;
}

const Seo: React.FC<Props> = ({ title }) => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
);

export default Seo;
