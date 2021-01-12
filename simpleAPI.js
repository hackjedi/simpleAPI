const express = require('express')
const app = express()
const port = 3000

// use the express-static middleware
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})