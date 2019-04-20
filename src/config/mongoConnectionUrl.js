import mongo from './mongo';
const { mongoUsername,  mongoPassword, mongoHostname, mongoDB, mongoPort} = mongo;

const url = `mongodb://@${mongoHostname}:${mongoPort}/${mongoDB}?authSource=admin`
export default url;