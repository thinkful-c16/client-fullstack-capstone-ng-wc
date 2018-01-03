import React from 'react';

import Wordcloud from './word-cloud';
import GeneratorForm from './generator-form';

export default function CloudEdit(props) {
  return (
    <section className="cloud-view">
      <div className="cloud-container">
        <Wordcloud />
      </div>
      <GeneratorForm/>
    </section>
  );
}