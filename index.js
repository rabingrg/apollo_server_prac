import {ApolloServer} from '@apollo/server'
import {startStandaloneServer} from '@apollo/server/standalone'
import { typeDefs } from './schema/typeDefinitions.js';
import { resolvers } from './schema/resolvers.js';

const server = new ApolloServer({typeDefs,resolvers})

const {url} = await startStandaloneServer(server,{
  listen:{port:4000}
})

console.log(`Server started at port ${url}`);
