import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const app = <App />;
const documentContainer = document.getElementById('root');
ReactDOM.render(app, documentContainer);
serviceWorker.unregister();
