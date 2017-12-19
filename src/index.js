import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { API_ROOT } from '../api-config';
import gql from "graphql-tag";
import {graphql} from "react-apollo/index";
import 'semantic-ui-css/semantic.min.css';

const client = new ApolloClient({
    link: new HttpLink({ uri: API_ROOT }),
    cache: new InMemoryCache()
});

const citiesQuery = gql`
            query {
              cities {
                name
              }
              user {
                name
                email
              }
            }
        `;
const AppWithData = graphql(citiesQuery)(App);

ReactDOM.render((
    <BrowserRouter>
        <ApolloProvider client={client}>
            <AppWithData />
        </ApolloProvider>
    </BrowserRouter>
), document.getElementById('root'));