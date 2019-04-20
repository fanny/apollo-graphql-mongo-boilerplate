import { ApolloServer, gql } from 'apollo-server'
import connectMongo from './db'
import schema from './graphql/schema';

const start = async () => {
    connectMongo();

    const server = new ApolloServer({
        typeDefs: schema.typeDefs,
        resolvers: schema.resolvers
    });

    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`)
    })
}

start();
