//const express = require('express')()
const app = require('express')();
//const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})