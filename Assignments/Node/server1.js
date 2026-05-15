import http from 'http'
import fs from 'fs'
const myserver = http.createServer((req, res)=>{
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    console.log('New Request Recieved');
    console.log(req.headers);
    fs.appendFile("log.txt",log,(err,data)=>{
        if (err) {
        res.statusCode = 500;
        return res.end('Internal Server Error');
    }

        switch(req.url){
            case '/': res.end('Homepage');break;
            case '/about': res.end('Aboutpage');break;
            case '/contacts': res.end('contactspage');break;
            case '/admin': res.end('Adminpage');break;
            default:res.end('404:Not Found');
        }
        
    });
    
});
myserver.listen(8080,()=>console.log('Server Started....'));
// if youre doing http://localhost:8080/about?myname=uday -----> 404:Not Found
// this is called query parameters 
// do : npm install url : to handle query parametrs
// next part in qpms.js