const http = require('http');


const server = http.createServer((req, res) => {
  res.end('Hello Morad!');
});


server.listen(5050, () => { console.log(`Server is running on port 5050!`);
});
