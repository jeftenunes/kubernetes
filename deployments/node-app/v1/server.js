const http = require("http");

const port = 3001;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    res.end("This is V1");
});

server.listen(port, hostname, () => {
    console.log(`Server up and running http://${hostname}:${port}/`);
})