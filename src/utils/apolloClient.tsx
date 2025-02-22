import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Create an HTTP link
const httpLink = createHttpLink({
  uri: `${BACKEND_URL}/graphql`,
});

// Set Authorization Header
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token"); // Get token from localStorage

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Create Apollo Client instance
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
