import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App'

import {Provider} from 'react-redux'
import { createStore } from 'redux'
import Rootreducers from './redux/reducers'

const store = createStore(Rootreducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);