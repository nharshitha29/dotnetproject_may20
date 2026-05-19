const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {

    // request logging
    console.log(`${req.method} ${req.url}`);

    // home route
    if (req.url === '/') {

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.end(`
            <h1>Welcome to Node.js Application</h1>
            <p>This is the home page</p>
        `);
    }

    // about route
    else if (req.url === '/about') {

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.end(`
            <h1>About Page</h1>
            <p>Simple Node.js server using HTTP module</p>
        `);
    }

    // api route
    else if (req.url === '/api') {

        const data = {
            name: 'Node.js API',
            status: 'Running',
            success: true
        };

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify(data));
    }

    // current time route
    else if (req.url === '/time') {

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            currentTime: new Date()
        }));
    }

    // 404 route
    else {

        res.writeHead(404, {
            'Content-Type': 'text/html'
        });

        res.end(`
            <h1>404 Not Found</h1>
            <p>Page does not exist</p>
        `);
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});