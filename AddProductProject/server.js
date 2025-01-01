// import {fileURLToPath} from 'url'
// const _dirname= decodeURI(new URL('.',import.meta.url).pathname)

const express=require('express');
const path = require('path');

const app=express();
// const router=express.Router();

// const __filename = fileURLToPath(import.meta.url); // Current file's absolute path
// const __dirname = path.dirname(__filename); 




    //browsing the content of html
app.get('/hel',function(req,res,next){
res.sendFile(path.join(__dirname,'/index.html'))
    // console.log("hello world")
    //res.end();
     
})


// app.use(router);

app.listen(3000,function(err){
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(" error not found");
    }
})