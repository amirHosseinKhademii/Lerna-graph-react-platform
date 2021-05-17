import { gql } from "graphql-request";

export const LOGIN_QUERY = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      name
      lastName
      email
      userName
      type
    }
  }
`;
