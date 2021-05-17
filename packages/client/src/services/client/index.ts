import { GraphQLClient } from "graphql-request";

export const gqlClient = new GraphQLClient(
  "https://api-amirgraphql-v4.herokuapp.com/",
  {
    headers: {},
  }
);
