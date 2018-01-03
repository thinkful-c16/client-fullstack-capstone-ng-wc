import React from 'react';
import Wordcloud from './word-cloud';

export default function CloudFocus(props) {
  return (
    <section className="cloud-focus-view">
      <div className="cloud-container">
        <Wordcloud />
      </div>
      <form>
        <button type="submit" name="submit" id="editWordCloud" className="button">
            Edit Word Cloud
        </button>
        <a href="#thumbsUp" className="thumbs-up">Thumbs up</a>
        <a href="#thumbsDown" className="thumbs-down">Thumbs down</a>
      </form>
    </section>
  );
}