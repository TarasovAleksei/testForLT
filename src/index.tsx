import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from "@mui/material";
import theme from "./common/theme";

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
    ,
    document.getElementById('root')
);

reportWebVitals();
