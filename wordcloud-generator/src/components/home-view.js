import React from 'react';
import GeneratorForm from './generator-form';
import LibraryCarousel from './library-carousel';

export default function HomeView(props) {
  return (
    <section className="home-view">
      <GeneratorForm />
      <hr></hr>
      <div className="home-carousel">
        <LibraryCarousel />
      </div>
      <br></br>
      <a href="#library" className="library">Browse the Word Cloud Library</a>
    </section>
  );
}