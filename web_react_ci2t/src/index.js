//dependencies
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
//routes
import AppRoutes from './routes';

//assets
import './index.css';

//import App from './Components/App'; // cambiar ruta
//import * as serviceWorker from './serviceWorker';

render(
<Router> 
    <AppRoutes />
</Router>,
 document.getElementById('root')); //cambiar 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
