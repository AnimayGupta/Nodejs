const http = require('http')

const server = http.createServer()

// const server = http.createServer((req,res) => {
//     console.log('request event')
//     res.end('Hello World!')
// })


server.on('request', (req,res) => {
    res.end('welcome')
})

server.listen(5000)