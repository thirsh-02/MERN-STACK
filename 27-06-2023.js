node js****************************************************************************************
const http=require ("http");                            //creating  a server
const port=8080;
let server=http.createServer((request,response)=>{
    response.end("Connected to server");
})
server.listen(8080);                                     //calling

expressjs**************************************************************************************
  let express=require ("express")
let app=express();
app.get("/",(req,res)=>{                         //get is a mathod call() ,every webpage has this
    console.log("This is called");
    res.send("Welcome to the wesite");      //Displays on the web
});

app.listen(8080, ()=>{
    console.log("Server connector");
});


let express=require ("express")
let app=express();
app.get("sece",(req,res)=>{
    res.send("This is get call");
});

app.post("/",(req,res)=>{
    res.send("This is get call");
});

app.patch("/",(req,res)=>{
    res.send("This is get call");
});

app.delete("/",(req,res)=>{
    res.send("This is get call");
});

app.put("/",(req,res)=>{
    res.send("This is get call");
});
app.listen(8080, ()=>{
    console.log("Server connector");
});
