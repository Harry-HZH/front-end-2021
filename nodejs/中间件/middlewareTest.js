const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('hello world')
})
app.listen(3000, () => {
    console.log('3000端口运行中......');
})