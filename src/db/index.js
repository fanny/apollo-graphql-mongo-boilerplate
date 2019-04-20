import Mongoose from 'mongoose'

import Book from './models/book'

const { DB_HOST, DB_NAME, DB_PORT} = process.env;

Mongoose.Promise = global.Promise;

const connectMongo = async () => {
    const connectionString = `mongodb://@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
    const db = await Mongoose.connect(connectionString, {
        useNewUrlParser: true
    });

    db.on('error', console.error.bind(console, 'MongoDB connection error:'))
    db.on('connected', console.log.bind(console, 'MongoDB connected'))

    return {
        Book
    };
}



export default connectMongo;