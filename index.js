const server = require('./server/server.js');

const PORT = 5050;

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})
