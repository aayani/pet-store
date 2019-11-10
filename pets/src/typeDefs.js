import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    pet(id: ID!): Pet
    pets: [Pet]
  }

  type Mutation {
    create(body: CreatePetInput!): Pet
    update(id: ID!, body: UpdatePetInput!): Pet
  }

  type Pet {
    id: ID
    name: String
    type: String
    colour: String
    age: Int
    breed: String
  }

  input CreatePetInput {
    name: String!
    type: PetType!
    colour: String = "n/a"
    age: Int = 0
    breed: String = "n/a"
  }

  input UpdatePetInput {
    name: String
    type: PetType
    colour: String
    age: Int
    breed: String
  }

  enum PetType {
    cat
    dog
  }
`;
