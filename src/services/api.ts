import { gql } from "@apollo/client";

export const GET_PROPERTIES = gql`
  query Properties {
    properties {
      title
      pricePerNight
      location
      id
      image
      host {
        name
      }
      description
      createdBy {
        name
      }
      createdAt
    }
  }
`;
