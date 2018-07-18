import { Query } from "react-apollo";
import React from 'react'
import { Mutation } from "react-apollo";

export function graphQLQueryComponentWithDefaultHandlers(query, whatToDoWithData, params = null) {
    return (
        <Query query={query} variables={params}>
            {({loading, error, data}) => {
                if (loading) return <p>loading...</p>;
                if (error) return <p>Error :(</p>;

                return whatToDoWithData(data);
            }}
        </Query>
    )
}