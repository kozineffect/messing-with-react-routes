import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './config/routes'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
//import routes from './config/routes.js';

ReactDOM.render((<Routes />
), document.getElementById('root'));
registerServiceWorker();
