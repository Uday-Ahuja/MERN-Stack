import console from 'console';
import fs from 'fs';


// Sync...Blocking....
 fs.writeFileSync('test.txt','Hey There (Sync)!!!');

//async....Non_blocking.....
 fs.writeFile('test.txt','Hey There(Async)!!!',(err)=>{});
// Blocking
 console.log('1');
const res=fs.readFileSync('./contacts.txt','utf-8');
console.log(res);
console.log('2');

//Non Blocking
console.log('1');
fs.readFile('./contacts.txt','utf-8',(err,res)=>{
    if(err){
        console.log("Error:",err);
    }
    else{
        console.log(res);
    }
});
console.log('2');
/*
//read Sync
const res=fs.readFileSync('./contacts.txt','utf-8');
console.log(res);

// read Async 
fs.readFile('./contacts.txt','utf-8',(err,result)=>{
if(err){
    console.log("ERROR:", err);
}
else{
    console.log(result);
}

});

// Append sync
fs.appendFileSync('test.txt',new Date().getDate().toLocaleString());

//fs.cpSync('./contacts.txt', 'contacts2.txt');

console.log(fs.statSync('contacts.txt'));
// to create directory 
//fs.mkdir('Sample-Dir');  'Sample-Dir/a/b' {recursive : true} to make folder inside folders ie b in a and a in sampledir
*/
