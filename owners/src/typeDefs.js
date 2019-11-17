import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    owner(id: ID!): Owner
    owners: [Owner]
    pets(id: ID!): [Pet]
  }

  type Mutation {
    addPet(ownerId: ID!, petId: String!): Owner
    removePet(ownerId: ID!, petId: String!): Owner
  }

  type Owner {
    id: ID
    name: String
    address: String
    phone: String
    email: String
    pets: [Pet]
  }

  type Pet {
    id: ID
    name: String
    type: String
    colour: String
    age: Int
    breed: String
  }
`;
