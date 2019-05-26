import React, { Component } from 'react'
import {BrowserRouter as Router , Route} from "react-router-dom";
import App from './App'
import Home from './page/Home'
import Student from './page/student'

export default class IRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <App>
                        <Route path='/home' component={Home}></Route>
                        <Route path='/student' component={Student}></Route>
                    </App>
                </Router>
            </div>
        )
    }
}
