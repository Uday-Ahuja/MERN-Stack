import http from 'http'
import fs from 'fs'
import url from 'url'
const myserver = http.createServer((req, res)=>{
    const log = `${Date.now()}: :${req.method} ${req.url} New Req Received\n`;
    const myurl= url.parse(req.url, true); // true to pass the query paramters
    console.log(myurl);
    console.log('New Request Recieved');
    console.log(req.headers);
    fs.appendFile("log.txt",log,(err,data)=>{
        if (err) {
        res.statusCode = 500;
        return res.end('Internal Server Error');
    }

        switch(myurl.pathname){
            case '/': res.end('Homepage');break;
            case '/about':
                const username=myurl.query.myname;
                res.end(`HI,${username}`);              
            break;
            case '/contacts': res.end('contactspage');break;
            case '/admin': res.end('Adminpage');break;
            default:res.end('404:Not Found');
        }
        
    });
    
});
myserver.listen(8080,()=>console.log('Server Started....'));