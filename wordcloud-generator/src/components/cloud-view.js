import React from 'react';
import Wordcloud from './word-cloud';
import WordCloudOptions from './word-cloud-options';

export default function CloudView(props) {
  return (
    <section className="cloud-view">
      <div className="cloud-container">
        <Wordcloud />
      </div>
      <form>
        <WordCloudOptions />
        <button type="submit" name="submit" id="regenerateWordCloud" className="button">
            Regenerate Word Cloud
        </button>
        <button type="submit" name="submit" id="deleteWordCloud" className="button">
            Delete Word Cloud
        </button>
      </form>
    </section>
  );
}