import React from 'react'
import Main from './Main'
import Header from './Menu/Header'
import gql from "graphql-tag";
import {graphQLQueryComponentWithDefaultHandlers} from "../util/graphqlUtils";

const initQuery = gql`
            query {
              cities {
                name
                latitude
                longitude
              }
            }
        `;

const App = () => graphQLQueryComponentWithDefaultHandlers(
    initQuery,
    (data) => {
        return (
            <div style={{margin: 0, flex: 1, display: 'flex', flexFlow: 'column'}}>
                <Header/>
                <Main cities={data.cities}/>
            </div>
        )
    });

export default App