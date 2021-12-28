import { gql } from "@apollo/client";

export const PINNEDITEMS_QUERY = gql`
  query User($user: String!) {
    user(login: $user) {
      pinnedItems(first: 6) {
        edges {
          node {
            ... on Repository {
              id
              name
              url
              createdAt
              languages(first: 10) {
                edges {
                  node {
                    id
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
