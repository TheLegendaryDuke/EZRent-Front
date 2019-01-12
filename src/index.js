import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import { ApolloProvider } from 'react-apollo';
import { ApolloClient , HttpLink, InMemoryCache } from 'apollo-boost'; //using the unbracketed version of ApolloClient caused cookie to be not sent
import { API_ROOT } from '../api-config';
import 'semantic-ui-css/semantic.min.css';
import { setContext } from 'apollo-link-context';

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('jwt');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const httpLink = new HttpLink({
    uri: API_ROOT,
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

ReactDOM.render((
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </BrowserRouter>
), document.getElementById('root'));