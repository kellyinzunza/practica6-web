// dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import App from './Components/App';
import About from './Components/About';
import Register from './Components/Register';


const AppRoutes = () =>
    <App>
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/register" component={Register} />

        </Switch>
    </App>

export default AppRoutes;