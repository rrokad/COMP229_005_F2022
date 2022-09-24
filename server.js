<<<<<<< Updated upstream
const hello = require('./hello');

hello.sayHello();

const lib = require('./lib');
console.log(lib.halfof(10));
console.log(lib.multiply(10, 2));
=======
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
>>>>>>> Stashed changes
