import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://localhost:3000',
  cache: new InMemoryCache()
})