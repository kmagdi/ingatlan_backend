const express = require('express')
const ingatlan = require('./routes/ingatlan')

const app = express()
app.use(express.json())

app.use('/api/ingatlan',ingatlan)

app.listen(5000,() => {console.log('listening on port 5000...')})