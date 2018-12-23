import 'dotenv/config'; // Import environment variables
import { ApolloServer } from 'apollo-server-express'; // Importing Apolloserver from the apollo package
import express from 'express'; // Importing the express function needed to create a server

// Importing our types and resolvers for graphql server
import { typeDefs, resolvers } from './graphql';

// Creating the express server app
const app = express();

// Setting a root route
app.get('/', (req, res) => {
  return res.send('Root Route');
});

// Creating the graphql server
const graphqlServer = new ApolloServer({
  typeDefs, // Passing in our types
  resolvers, // Passing in our resolvers
});

graphqlServer.applyMiddleware({ app }); // Attaching the graphql server to our express server

const port = process.env.PORT; // defining the port we want to use

// Calling our express server to start and listen on the designated port
app.listen({ port }, () => {
  console.log(`Server ready at http:localhost:${port}${graphqlServer.graphqlPath}`);
});