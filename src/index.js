import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import { ApolloProvider } from 'react-apollo';
import { ApolloClient , HttpLink, InMemoryCache } from 'apollo-boost'; //using the unbracketed version of ApolloClient caused cookie to be not sent
import { API_ROOT } from '../api-config';
import 'semantic-ui-css/semantic.min.css';

const client = new ApolloClient({
    link: new HttpLink({ uri: API_ROOT, credentials: 'include'}),
    cache: new InMemoryCache()
});

ReactDOM.render((
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </BrowserRouter>
), document.getElementById('root'));