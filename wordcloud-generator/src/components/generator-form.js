import React from 'react';
import './generator-form.css';

import WordCloudOptions from './word-cloud-options';

export default class generatorForm extends React.Component {

  render() {
    return (
      <form>
        <div>
          <label htmlFor="textInput">please input text below to get started</label>
        </div>
        <div>
          <textarea
          name="textInput"
          id="textInput"
          className="text"
          required>
          </textarea>
        </div>
        <div>
          <button 
            type="submit"
            name="submit"
            id="generateWordCloudButton" 
            className="button"
          >
            Generate Word Cloud
          </button>
        </div>
        <WordCloudOptions />
      </form>
    );
  }
}