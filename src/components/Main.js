import {Switch, Route} from 'react-router-dom'
import React, {Component} from 'react'
import Home from './Home/Home'
import MAL from './MAL/MAL'
import Register from './Register'
import Login from './Login'

const Main = (props) => (
    <Switch>
        <Route exact path='/' render={()=>(<Home {...props}/>)}/>
        <Route path='/mal/:city' render={(routerProps)=>(<MAL {...props} {...routerProps}/>)}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
    </Switch>
);

export default Main