import React from 'react';
import './generator-form.css';

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
        <div>
          <label htmlFor="fontColor">Font Color:</label>
          <select name="font-color" id="fontColor" size="1">
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="blue">Blue</option>
          </select>
          <label htmlFor="fontStyle">Font:</label>
          <select name="font-style" id="fontStyle" size="1">
            <option value="Impact">Impact</option>
            <option value="Arial">Arial</option>
            <option value="Helvetica">Helvetica</option>
          </select>
      </div>
      </form>
    );
  }
}