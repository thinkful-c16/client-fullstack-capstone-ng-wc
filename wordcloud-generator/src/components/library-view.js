import React from 'react';
import Wordcloud from './word-cloud';
import LibraryCarousel from './library-carousel';

export default function LibraryView(props) {
  return (
    <section className="library-view">
      <div className="library-container">
        <Wordcloud />
      </div>
      <div className="library-carousel">
        <LibraryCarousel />
      </div>
    </section>
  );
}