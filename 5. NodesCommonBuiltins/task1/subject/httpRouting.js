const http = require('http');
const fs = require('fs');
const url = require('url')

let data = {'key':'value'};

let server = http.createServer((request, response) => {
    let parsedUrl = url.parse(request.url, parseQueryString=true);

    console.log(JSON.stringify(parsedUrl));

    const pathname = parsedUrl.pathname;
    
    switch (pathname) {
        case '/api':
            response.writeHead(200,{'Content-Type': 'application/json'});
            response.end(JSON.stringify(data));
            break;
        case '/home':
        case '/about':
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(fs.readFileSync(`./html/${pathname}.html`));
            break;
        case '/':
            response.writeHead(301, {'Location': '/home'});
            response.end();
            break;
        default:
            response.writeHead(404);
            response.end();
            break;
    }



});

server.listen(3000, () => console.log("Server started."));