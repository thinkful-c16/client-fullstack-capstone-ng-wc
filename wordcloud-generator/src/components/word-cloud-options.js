import React from 'react';

export default class WordCloudOptions extends React.Component {

  render() {
    return (
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
    );
  }
}