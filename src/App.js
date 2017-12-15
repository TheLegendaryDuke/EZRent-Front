import React, { Component } from 'react'
import Main from './Main'
import Header from './Header'

const App = () => (
    <div style={{margin : 0, flex: 1, display: 'flex', flexFlow: 'column'}}>
        <Header />
        <Main />
    </div>
);

export default App