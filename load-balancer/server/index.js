const dotenv = require('dotenv');
const express = require('express');

dotenv.config();
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>I am the server! This is an endpoint!</h1>
                <h3>Server : ${process.env.SERVER_ID}</h3>
                <pre>${JSON.stringify(req.headers, null, 4)}</pre>
            </body>
        </html>
    `);
});

app.listen(7777, () => {
    console.log('Server is running on port 7777');
});