const http = require('http');
const fs = require('fs').promises;


const server1 = http.createServer(async (req,res)=>{
    try{
        if(req.method === 'GET') {
            if(req.url === '/user'){
                const data = await fs.readFile('./NAVER.html');
                res.writeHead(200, {'Content-Type':"text/html; charset=utf-8"});
                res.end(data);
            }
        }        
    } catch (err) {
        console.log(err);
        res.writeHead(500, {'Content-Type':"text/html; charset=utf-8"});
        res.end(err.message);
    }
});

const server2 = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':"text/html; charset=utf-8"});
    res.write('<h1>hello node!</h1>');
    res.end('<p> hello serve!</p>');
});
 
server1.listen(8080);
server1.on('listening', () => {
    console.log('8080번 포트에서 서버 대기중입니다.')
});
server1.on('error',(error)=>{
    console.error(error);
});

server2.listen(8081);
server2.on('listening', () => {
    console.log('8081번 포트에서 서버 대기중입니다.')
});
server2.on('error',(error)=>{
    console.error(error);
});