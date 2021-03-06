import React from 'react';

import Header from '../../lib/Header';

const content = <div className="terraClinical-HeaderTest--content" style={{ backgroundColor: 'black', height: '30px', width: '300px', margin: '0 10px 0 0' }} />;

export default () => (
  <Header
    title="Header with content on the right"
    endContent={content}
  />
);
