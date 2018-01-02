import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
// import Wordcloud from './components/word-cloud'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
