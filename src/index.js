import React from 'react';
import ReactDOM from 'react-dom';
import rootStore from "./store/rootStore";
import {Provider} from 'react-redux';
import App from "./views/App";

ReactDOM.render(
    <Provider store={rootStore}>
        <App />
    </Provider>,
  document.getElementById('root')
);

