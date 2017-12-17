import {Switch, Route} from 'react-router-dom'
import React, {Component} from 'react'
import Home from './components/Home'
import MAL from './components/MAL'

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/mal/:city' component={MAL}/>
        {/*<Route path='/schedule' component={Schedule}/>*/}
    </Switch>
);

export default Main