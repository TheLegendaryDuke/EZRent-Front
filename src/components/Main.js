import {Switch, Route} from 'react-router-dom'
import React, {Component} from 'react'
import Home from './Home/Home'
import MAL from './MAL/MAL'
import Register from './Register/Register'
import Login from './Login/Login'
import Profile from './Profile/Profile'

const Main = (props) => (
    <Switch>
        <Route exact path='/' render={(routerProps)=>(<Home {...props} {...routerProps}/>)}/>
        <Route path='/mal/:city' render={(routerProps)=>(<MAL {...props} {...routerProps}/>)}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' render={(routerProps)=>(<Login {...props} {...routerProps}/>)}/>
        <Route path='/registerWithSocial' render={(routerProps)=>(<Register {...props} {...routerProps}/>)}/>
        <Route path='/profile/:option' render={(routerProps)=>(<Profile {...props} {...routerProps}/>)}/>
    </Switch>
);

export default Main