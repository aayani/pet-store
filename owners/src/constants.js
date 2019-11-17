export const PETS_SERVICE_PATH =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/graphql'
    : 'http://nginx:8080/pets';
