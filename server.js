
let path = require('path');

let express = require('express');
let app = express();

const PORT = process.env.PORT || 3002;

app.use('/', express.static(path.join(__dirname, 'dist')));

app.get('/heartbeat', (request, response) => {
	console.log('Health check from aws cloud watch');
	response.send('ok');
});

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => {
	console.log('Server started http://localhost:' + PORT);
});
