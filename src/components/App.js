import React, { Component } from 'react'
import Main from './Main'
import Header from './Header'

const App = (props) => (
    <div style={{margin : 0, flex: 1, display: 'flex', flexFlow: 'column'}}>
        <Header />
        <Main cities={props.data.loading ? [] : props.data.cities}/>
    </div>
);

export default App