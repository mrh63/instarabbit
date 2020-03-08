import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Statistics from './components/Statistics';

const store = configureStore();

const app = (
    <Provider store={store}>
        <Statistics/>
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));


