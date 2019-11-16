export const PETS_SERVICE_PATH =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/pets/graphql'
    : 'http://localhost:8080/pets';
