import React from 'react';

import Header from './header';
import HomeView from './home-view';
import CloudView from './cloud-view';
import LibraryView from './library-view';

export default function App(props) {
  return (
    <div>
      <Header />
      <hr></hr>
      <main role="main">
        <HomeView />
        <hr></hr>
        <CloudView />
        <hr></hr>
        <LibraryView/>
      </main>
    </div>
  );
}
