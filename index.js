const server = require('./server/server.js');

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})
