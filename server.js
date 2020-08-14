require('dotenv').config()
const express = require('express')
const app = express()
const ejs = require('ejs')
const layout = require('express-ejs-layouts')

const PORT = process.env.PORT || 5000

app.use(express.static('public'))
app.use(layout)
app.set('view engine', 'ejs')



app.get('/', (req, res) => {
    res.render('home')
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})