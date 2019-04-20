import { ApolloServer, gql } from 'apollo-server'
import mongoose from 'mongoose'
import mongoConnectionUrl from './config/mongoConnectionUrl'
import BookSchema from './models/book'

mongoose.connect(mongoConnectionUrl, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.on('connected', console.log.bind(console, 'MongoDB connected'))

const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton'
    },
    {
        title: 'I kill giants',
        author: 'Fanny vieira'
    }
]

const typeDefs = gql `

type Book {
    title: String
    author: String
}

type Query {
    books: [Book]
}

`
const resolvers = {
    Query: {
        books: () => books,
    }
}

const server = new ApolloServer({ typeDefs, resolvers });


let book = new BookSchema({
    title: 'Seja foda!',
    author: 'Caio carneiro'
})
book.save()

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
    console.log('Isso aí galera do reggaee')
})