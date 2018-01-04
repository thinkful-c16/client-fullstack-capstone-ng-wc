import React from 'react';
import Wordcloud from './word-cloud';
import { connect } from 'react-redux';
import {goEdit} from '../actions';

export class CloudFocus extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    this.props.dispatch(goEdit());
  }

  render(){
    return (
      <section className="cloud-focus-view">
        <div className="cloud-container">
          <Wordcloud />
        </div>
        <form onSubmit={(event) => this.onSubmit(event)}>
          <button type="submit" name="submit" id="editWordCloud" className="button">
              Edit Word Cloud
          </button>
          <a href="#thumbsUp" className="thumbs-up">Thumbs up</a>
          <a href="#thumbsDown" className="thumbs-down">Thumbs down</a>
        </form>
      </section>
    );
  }
}

export default connect()(CloudFocus);