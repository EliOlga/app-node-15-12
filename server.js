const express = require('express');
const bodyParser = require('body-parser')
const {MongoClient} = require("mongodb");
const app = express();

var connectionString = 'mongodb+srv://admin:admin@cluster0.ioxqzqz.mongodb.net/?retryWrites=true&w=majority'

// il faut tout mettre les use, listen, get, post a l'interieur du .then.
// tout sera execute seulement si on arrive a se connecter
MongoClient
	.connect(connectionString, {useUnifiedTopology: true})
	.then(client => {// ... const db = client.db('star-wars-quotes')

	console.log('Connected to Database')
	const db = client.db('api-mac')

		app.use(bodyParser.urlencoded({extended: true}))

		app.listen(3000, function () {
			console.log('listening on 3000')
		})

		/*
		app.get('/', function(req, res) {
			res.send('Hello World')
		})*/

		/*

		app.get('/college', function(req, res) {
			res.send('Hello College')
		})

		app.get('/qui-sommes-nous', function(req, res) {
			res.send('Nous sommes des experts nodejs')
		})
		*/

		app.get('/', (req, res) => {
			res.sendFile(__dirname + '/index.html')
		})
		/*
		app.get('/page1', (req, res) => {
			res.sendFile(__dirname + '/page1.html')
		})

		app.get('/page2', (req, res) => {
			res.sendFile(__dirname + '/page2.html')
		})*/
//app.post('/quotes', (req, res) => {console.log('Gilles')})
		app.post('/quotes', (req, res) => {
			console.log(req.body)
		})

		/*app.use(/!* ... *!/)
		app.get(/!* ... *!/)
		app.post(/!* ... *!/)
		app.listen(/!* ... *!/)*/
	})
	.catch(console.error)

