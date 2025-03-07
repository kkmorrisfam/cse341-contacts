const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

let dbConnection;

const initDB = (callback) => {
    if (dbConnection) {
        console.log('Database already initialized');
        return callback(null, dbConnection);
    }
    MongoClient.connect(process.env.MONGO_URI)
        .then ((client)=>{
            dbConnection = client;
            callback(null, dbConnection);
            console.log("Database initialized....")
        })
        .catch((err)=>{
            callback(err);
        });
}

const getDB = ()=> {
    if (!dbConnection) {
        throw Error('Database not initialized.')        
    }

    return dbConnection;
};

module.exports = { initDB, getDB}