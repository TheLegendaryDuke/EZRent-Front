import {Switch, Route} from 'react-router-dom'
import React, {Component} from 'react'
import Home from './components/Home'

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        {/*<Route path='/roster' component={Roster}/>*/}
        {/*<Route path='/schedule' component={Schedule}/>*/}
    </Switch>
);

export default Main