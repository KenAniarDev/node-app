const express = require('express')
const app = express()

const port = process.env.PORT || 3000
const mongdb_uri = process.env.MONGODB_URI || 'not successful'


app.get('/', (req, res) => {
  res.send(`port: ${mongdb_uri}`)
})

app.listen(port, () => {
  console.log('server running on port ' + port)
})