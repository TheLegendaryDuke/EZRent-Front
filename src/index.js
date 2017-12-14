import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { API_ROOT } from '../api-config';

const client = new ApolloClient({
    link: new HttpLink({ uri: API_ROOT }),
    cache: new InMemoryCache()
});

ReactDOM.render((
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>
), document.getElementById('root'));