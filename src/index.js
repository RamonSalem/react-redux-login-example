import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import Routes from './AppRouter';
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';

  import { PersistGate } from 'redux-persist/integration/react'

import configureStore from './store/configureStore';

const {store, persistor} = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <Route path="/" component={Routes} />
            </Router>
        </PersistGate>    
    </Provider>,
 document.getElementById('root'));
registerServiceWorker();
