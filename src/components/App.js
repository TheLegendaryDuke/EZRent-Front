import React, { Component } from 'react'
import Main from './Main'
import Header from './Menu/Header'

const App = (props) => (
    <div style={{margin : 0, flex: 1, display: 'flex', flexFlow: 'column'}}>
        <Header user={props.data.loading ? null : props.data.user}/>
        <Main cities={props.data.loading ? [] : props.data.cities} user={props.data.loading ? null : props.data.user} />
    </div>
);

export default App