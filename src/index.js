import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import ConfigureStore from './redux/ConfigureStore';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={ConfigureStore}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);