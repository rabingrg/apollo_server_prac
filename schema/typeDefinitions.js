export const typeDefs = `#graphql
  type Game{ 
    id: ID!
    title: String!
    platform: [String!]! 
    }

  type Author{
    id: String!
    name: String!
    verified: Boolean!
  }

  type Query {
    games: [Game]
    authors: [Author]
  }
`;
