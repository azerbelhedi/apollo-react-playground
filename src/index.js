import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from 'react-router-dom'

//1
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { AUTH_TOKEN } from "./constants";

//2
const HttpLink = createHttpLink({
  uri: "http://localhost:4000",
});

//2.1 (added for auth)
const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem(AUTH_TOKEN)
  return {
    headers : {
      ...headers,
      authorization : token ? `Bearer ${token}` : ''
    }
  }
})

//3
const client = new ApolloClient({
  link: authLink.concat(HttpLink) ,
  cache: new InMemoryCache(),
});

//4
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <ApolloProvider client = {client}>
      <App />
    </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
