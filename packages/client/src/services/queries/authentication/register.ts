import { gql } from "graphql-request";

export const REGISTER_QUERY = gql`
  mutation register(
    $name: String!
    $lastName: String!
    $userName: String!
    $email: String!
    $password: String!
    $type: String!
  ) {
    signup(
      name: $name
      lastName: $lastName
      userName: $userName
      email: $email
      password: $password
      type: $type
    ) {
      name
      lastName
      email
      userName
      type
    }
  }
`;
