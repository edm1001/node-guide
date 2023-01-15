const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to homepage')
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
        }
        res.end(
            `
            <h1>Oops!</h1>
            <p>We can't find your specific page</p>
            <a href="/" >  Home </a>
            `
        )
})

server.listen(5000)