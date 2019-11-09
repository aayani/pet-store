import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    pet(id: ID!): Pet
    pets: [Pet]
  }

  type Mutation {
    pet(body: PetInput!): Pet
  }

  type Pet {
    id: ID
    name: String
    type: String
    colour: String
    age: Int
    breed: String
  }

  input PetInput {
    name: String!
    type: PetType!
    colour: String = "n/a"
    age: Int = 0
    breed: String = "n/a"
  }

  enum PetType {
    cat
    dog
  }
`;
