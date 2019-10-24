import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`

body{
  background: linear-gradient(90deg, #249DC9 2.49%, #F9B4ED 76.81%, #F9B4ED 87.91%);
}
`
ReactDOM.render(
    <GlobalStyle>
        <App />
    </GlobalStyle>,
    document.getElementById('root')
);

serviceWorker.unregister();
