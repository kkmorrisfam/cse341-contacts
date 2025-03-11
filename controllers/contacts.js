const mongoDB = require("../db/database");
const ObjectId = require("mongodb").ObjectId; //unique id that mongo db assigns to each entry - primary key

// Get all contacts route

const getAll = async (req, res) => {
  const result = await mongoDB.getDB().db().collection("contacts").find(); //can add database name in db() if not in MONGO_URI string
  result.toArray().then((contacts) => {
    res.setHeader("Content-type", "application/json");
    res.status(200).json(contacts);
  });
};

// Do I want params or query? Also, should I use .findOne()?
// Get one contact route
const getOne = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const result = await mongoDB
    .getDB()
    .db()
    .collection("contacts")
    .find({ _id: contactId }); //can add database name in db() if not in MONGO_URI string
  // console.log(result)
  result
    .toArray()
    .then((contacts) => {
      res.setHeader("Content-type", "application/json");
      res.status(200).json(contacts[0]); //works with or without the [0]
    })
    .catch((error) => {
      console.log("error getOne", error);
    });
};

// Post Route, Create a new contact, return new contact id in response body
const createContact = async (req, res) => {
  console.log("create contact");
  const contact = {
    firstName: req.body.firsName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  const contactId = new ObjectId(req.params.id);
  const response = await mongoDB
    .getDB()
    .db()
    .collection("contacts")
    .insertOne({ _id: contactId }, contact);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error) ||
      "Some error occurred while trying to update a contact";
  }
};

// Put Route, Update a contact, return status code
const updateContact = async (req, res) => {
  console.log("update contact");
};

// Delete Route, delete a contact, return status code
const deleteContact = async (req, res) => {
  console.log("delete contact");
};

module.exports = {
  getAll,
  getOne,
  createContact,
  updateContact,
  deleteContact,
};
