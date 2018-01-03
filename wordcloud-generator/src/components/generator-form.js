import React from 'react';
import { connect } from 'react-redux';

import './generator-form.css';

export class GeneratorForm extends React.Component {

  render() {

    const view = this.props.view;

    let button = null;

    if (view === 'cloudEdit') {
      button =
              <div>
                <button type="submit" name="submit" id="regenerateWordCloud" className="button">
                    Regenerate Word Cloud
                </button>
                <button type="submit" name="submit" id="deleteWordCloud" className="button">
                    Delete Word Cloud
                </button>
                <button type="submit" name="submit" id="saveWordCloud" className="button">
                    Save to Library
                </button>
              </div>
    } else {
      button =
              <div>
                <button type="submit" name="submit" id="generateWordCloudButton" className="button">
                Generate Word Cloud
                </button>
              </div>
    }

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
          {button}
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

const mapStateToProps = state => ({
  view: state.view
});

export default connect(mapStateToProps)(GeneratorForm);