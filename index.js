const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.json(req.query)
})

app.post('/', (req, res) => {
	console.log(req.body)
	res.json(req.body)
})

app.listen(3000, () => {
	console.log('Listening on 3000…')
})
