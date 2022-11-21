import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const ClientApollo = new ApolloClient({
    uri: 'https://localhost:7295/graphql/',
    cache: new InMemoryCache(),
  });

  export default ClientApollo;