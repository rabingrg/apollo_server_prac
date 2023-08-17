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
    game(id:ID!):Game
    authors: [Author]
    author(id:ID!):Author
  }

`;
