import { ApolloClient, InMemoryCache } from "@apollo/client";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export const client = new ApolloClient({
  uri: BACKEND_URL,
  cache: new InMemoryCache(),
});
