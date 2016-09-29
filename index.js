const express = require('express')
const bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.engine('html', mustacheExpress())

app.set('views engine', 'mustache')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
	res.render('result.mustache.html', { data: mustacheView(req.query)})
})

app.post('/', (req, res) => {
	res.render('result.mustache.html', { data: mustacheView(req.body)})
})

app.listen(3000, () => {
	console.log('Listening on 3000…')
})

const mustacheView = data => (
	Object.keys(data).map(key => (
		{
			key: key,
			value: data[key]
		}
	))
)
