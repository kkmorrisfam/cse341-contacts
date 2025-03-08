const mongoDB = require('../db/database');
const ObjectId = require('mongodb').ObjectId;  //unique id that mongo db assigns to each entry - primary key

const getAll = async (req, res) => {
    const result = await mongoDB.getDB().db().collection('contacts').find()  //can add database name in db() if not in MONGO_URI string
    result.toArray().then ((contacts) => {
        res.setHeader('Content-type', 'application/json');
        res.status(200).json(contacts);
    });
};

// Do I want params or query?
const getOne = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const result = await mongoDB.getDB().db().collection('contacts').find({_id:contactId})  //can add database name in db() if not in MONGO_URI string
    // console.log(result)
    result.toArray()
    .then ((contacts) => {
        res.setHeader('Content-type', 'application/json');
        res.status(200).json(contacts[0]);
    })
    .catch(error => {
        console.log("error getOne", error);
    });

};

module.exports = { getAll, getOne};