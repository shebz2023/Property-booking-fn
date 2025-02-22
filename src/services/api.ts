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
export const MY_PROPERTIES = gql`
  query MyProperties {
    myProperties {
      title
      title
      location
    }
  }
`;
