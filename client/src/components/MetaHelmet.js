import React from 'react';
import { Helmet } from 'react-helmet';

const MetaHelmet = ({ description, title, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};
MetaHelmet.defaultProps = {
  title: 'Welcome To MugShop',
  description: 'We sell the cheapest and coolest mugs',
  keywords: 'Mugs, buy mugs, cups, cheap cups, cheap mugs',
};

export default MetaHelmet;
