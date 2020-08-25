import { gql } from "@apollo/client";

export const UPDATE_LEADLIST = gql`
  mutation updateLeadList($uid: String!, $leadList: [Lead]) {
    updateLeadList(uid: $uid, leadList: $leadList) {
      _id
      uid
      displayName
      leadsList {
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
  }
`;
