import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/tailwind.css";
import "antd/dist/antd.css";
// import {
//   ApolloClient,
//   InMemoryCache,
//   createHttpLink,
//   ApolloProvider,
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

function MyApp({ Component, pageProps }: AppProps) {
  // const httpLink = createHttpLink({ uri: process.env.GRAPHQL_ENDPOINT });
  // const authLink = setContext((_, { headers }) => {
  //   return {
  //     headers: {
  //       ...headers,
  //       authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
  //     },
  //   };
  // });
  // const client = new ApolloClient({
  //   link: authLink.concat(httpLink),
  //   cache: new InMemoryCache(),
  // });
  return (
    // <ApolloProvider client={client}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </ApolloProvider>
  );
}

export default MyApp;
