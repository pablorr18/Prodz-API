import { createServer } from 'http';

const app = require('./app');

const port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);

const server = createServer(app);
server.listen(port);

console.log('PRODZ:API Server running at port ' + port);