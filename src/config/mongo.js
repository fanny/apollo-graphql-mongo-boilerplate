import 'dotenv/config';

const mongoConfig = {
    mongoUsername: process.env.MONGO_USERNAME,
    mongoPassword: process.env.MONGO_PASSWORD,
    mongoPort: process.env.MONGO_PORT,
    mongoDB: process.env.MONGO_DB,
    mongoHostname: process.env.MONGO_HOSTNAME
}

export default mongoConfig;