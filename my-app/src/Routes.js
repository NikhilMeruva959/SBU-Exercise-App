import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import history from './history';
import Login from './components/Login/Login'
import Dashboard from './components/dashboard/Dashboard'

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/dashboard" exact component={Dashboard} />
                </Switch>
            </Router>
        )
    }
}