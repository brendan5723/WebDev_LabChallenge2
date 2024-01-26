const http = require(`http`);

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write('<I am the response</div>');
    res.end();
}); 


server.listen(3000, () => {
    console.log('Server is running...');
}