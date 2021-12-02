import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App/App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "@mui/material";
import theme from "./common/theme";
import {Provider} from "react-redux";
import {store} from "./App/store";

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
