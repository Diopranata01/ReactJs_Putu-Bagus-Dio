import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri:"https://sincere-chimp-41.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    // headers:{
    //     'x-hasura-admin-secret ': 'example_secret'
    // }
    headers: {'x-hasura-admin-secret': 'mJbaM!Ui79_3V!p'}
});

export default client;