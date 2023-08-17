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
  type DeleteGameResponse {
  success: Boolean!
  message: String!
  updatedGames: [Game]
}

type DeleteAuthoreResponse {
  success: Boolean!
  message: String!
  updatedAuthors: [Author]
}

input GameInput{
  title:String!
  platform:[String!]!
}

input UpdateGameInput{
  title:String
  platform:[String]
}

input AuthorInput{
  name:String!
  verified:Boolean!
}

type CreationGameResponse{
  success: Boolean!
  message: String!
  newlyAddedData:[Game!]!
}

type CreationAuthResponse{
  success: Boolean!
  message: String!
  newlyAddedData:[Author!]!
}
  type Query {
    games: [Game]
    game(id:ID!):Game
    authors: [Author]
    author(id:ID!):Author
  }

  type Mutation {
    addGame(game:GameInput!):CreationGameResponse
    addAuthor(auth:AuthorInput!):CreationAuthResponse
    updateGame(id:ID!,upGame:UpdateGameInput!):Game
    updateAuthor(id:ID!,upAuth:AuthorInput!):Author
    deleteGame(id:ID!):DeleteGameResponse
    deleteAuthor(id:ID!):DeleteAuthoreResponse
  }

`;
