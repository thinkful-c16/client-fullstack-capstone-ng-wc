import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Wordcloud from './components/wordcloud'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Wordcloud />, document.getElementById('root'));
registerServiceWorker();
