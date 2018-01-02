import React from 'react';

import TopNav from './top-nav';

export default function Header(props) {
  return (
    <header>
      <TopNav />
      <h1>Word Cloud Generator</h1>
    </header>
  );
}