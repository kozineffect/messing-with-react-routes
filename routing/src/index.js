import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './config/routes'
import './index.css';
import './App.css';
import './Form.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((<Routes />
), document.getElementById('root'));
registerServiceWorker();
