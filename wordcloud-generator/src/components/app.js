import React from 'react';

import Header from './header';
import HomeView from './home-view';
import Cloud from './cloud';
import Library from './library';

export default function App(props) {
  return (
    <div>
      <Header />
      <main role="main">
        <HomeView />
      </main>
    </div>
  );
}
