import React from 'react';
import { connect } from 'react-redux';
import './header.css';

import TopNav from './top-nav';

export function Header(props) {

  const view = props.view

  let headerMessage = null;

  if (view === 'library') {
    headerMessage = <h1>Word Cloud Library</h1>
  }
  else if (view === 'home') {
    headerMessage = <h1>Welcome to Word Cloud Generator</h1>
  }
  else {
    headerMessage = <h1>Word Cloud Generator</h1>
  }

  return (
    <header>
      <TopNav />
      {headerMessage}
    </header>
  );
}

const mapStateToProps = state => ({
  view: state.view
});

export default connect(mapStateToProps)(Header);