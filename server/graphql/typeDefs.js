const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    leads: [Lead]
    leadsCount: Int
  }
  type Lead {
    _id: ID
    businessName: String
    phoneNumber: String
    city: String
    state: String
    firstName: String
    lastName: String
    streetAddress: String
    secondPhoneNumber: String
    notes: String
    category: [String]
    email: String
    disposition: String
  }
`;

module.exports = typeDefs;
