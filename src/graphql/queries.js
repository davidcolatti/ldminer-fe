import { gql } from "@apollo/client";

export const GET_LEADS = gql`
  query {
    leads {
      _id
      businessName
      phoneNumber
      city
      state
      firstName
      lastName
      streetAddress
      secondPhoneNumber
      notes
      category
      email
      disposition
    }
  }
`;
