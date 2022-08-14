const express = require('express')
const hbs = require('hbs')
require()

const app = express()
const port = process.env.PORT

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index',{
        name: 'Potrancas',
        title: 'SolarTec'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic',{
        name: 'Potrancas',
        title: 'SolarTec'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements',{
        name: 'Potrancas',
        title: 'SolarTec'
    })
})

app.listen(port)