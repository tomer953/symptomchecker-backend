// server.js
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require("mongodb").ObjectID;
const bodyParser = require('body-parser');

const port = 8000;
const CONNECTION_URL = "mongodb+srv://dbUser:Qwe!23@cluster0-zrgnf.mongodb.net/test?retryWrites=true";
const DATABASE_NAME = "symptomchecker";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var database, collection;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/items/:id', (req, res) => {
    res.send('you requested an item');
});

app.listen(port, () => {
    console.log('We are live on ' + port);

    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("items");
        console.log("Connected to `" + DATABASE_NAME + "`!");
        collection.insertOne({ age: 28, name: 'tomer953'});
    });
});
