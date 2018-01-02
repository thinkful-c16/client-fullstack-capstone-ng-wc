import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Wordcloud from 'src/wordcloud'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Wordcloud />, document.getElementById('root'));
registerServiceWorker();
