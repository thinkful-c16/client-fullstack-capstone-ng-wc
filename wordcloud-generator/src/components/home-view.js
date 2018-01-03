import React from 'react';
import GeneratorForm from './generator-form';
import LibraryCarousel from './library-carousel';

export default function HomeView(props) {
  return (
    <section className="home-view">
      <GeneratorForm />
      <hr></hr>
      <div className="home-carousel-header">
        <h3>from the Library:</h3>
      </div>
      <LibraryCarousel />
      <div className="browse-library" id="browseLibrary">
        <button type="submit" name="submit" id="browseLibraryButton" className="button">
            Browse Library
        </button>
      </div>
    </section>
  );
}