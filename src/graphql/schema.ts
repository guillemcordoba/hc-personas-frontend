import { gql } from 'apollo-boost';

export const typeDefs = gql`
  type Persona {
    id: ID!

    handle: String!
  }

  type Profile {

  }

  extend type Query {
    profiles: [Profile!]!
    personas: [Personas!]!
  }

`;
