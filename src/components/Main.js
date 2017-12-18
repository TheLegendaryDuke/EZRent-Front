import {Switch, Route} from 'react-router-dom'
import React, {Component} from 'react'
import Home from './Home/Home'
import MAL from './MAL/MAL'

const Main = (props) => (
    <Switch>
        <Route exact path='/' render={()=>(<Home {...props}/>)}/>
        <Route path='/mal/:city' render={(routerProps)=>(<MAL {...props} {...routerProps}/>)}/>
        {/*<Route path='/schedule' component={Schedule}/>*/}
    </Switch>
);

export default Main