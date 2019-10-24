import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Kanit|Rubik+Mono+One&display=swap');

h1,h2,h3 {
    font-family: 'Rubik Mono One', sans-serif;
}

h4,p {
    font-family: 'Kanit', sans-serif;
}
body{
  background: linear-gradient(90deg, #249DC9 2.49%, #F9B4ED 76.81%, #F9B4ED 87.91%);
}
`
ReactDOM.render(
    <>
        <GlobalStyle />

        <App />
    </>,
    document.getElementById('root')
);

serviceWorker.unregister();
