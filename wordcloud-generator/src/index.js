import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Wordcloud from './components/word-cloud'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Wordcloud />, document.getElementById('root'));
registerServiceWorker();
