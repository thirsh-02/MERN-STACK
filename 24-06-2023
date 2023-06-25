//NODE JS         //https://roadmap.sh/node.js
cd Desktop         //path
node filename      //file name

function sum(num1,num2)
{
    console.log(num1+num2);
}
sum(10,20);

//while giving input node file_name inputs
//exporting node 
//in file 1 : app.js******************************************************************************
function sum(num1,num2)
{
    console.log(num1+num2);
}

function sub(num1,num2)
{
    console.log(num1-num2);
}

 function mul(num1,num2)
{
    console.log(num1*num2);
}

function div(num1,num2)
{
    console.log(num1/num2);
}

module.exports={sum,sub,mul,div};

in file 2 index.js***********************************************************************************
const { sum,sub,mul,div } = require('./app');   //common js for importing in backend
let num1=parseInt(process.argv[2]);   //parseInt for type conversion  //process.argv ---> for getting input
let num2=parseInt(process.argv[3]);
let c=process.argv[4];

if(c=='+'){
    console.log(sum(num1,num2));
}
else if(c=='-'){
    console.log(sub(num1,num2));
}
else if(c=='*'){
    console.log(mul(num1,num2));
}
else if(c=='/'){
    console.log(div(num1,num2));
}


const fs=require('fs');                      //reading the text file
fs.readFile(`${__dirname}/states.txt`,(err,data)=>{
       if(err){
        console.log("ERROR!!!⚠️");
       }
       else{
        console.log(data.toString());
       }
})



const name ='thirsha';          //template leterals
console.log(`Hello ${name} ! How are you?`);    //name is placeholder

//WRITING A FILE
const inputData="Hello!!! This is new file";
fs.writeFile(`${__dirname}/file1.txt`,inputData,(err)=>{
    if(err){
        console.log("Error in writing the function");
    }
    else{
        console.log("Done Writing!!!");
    }
})



//PROMISE
function read(filepath){                                   //promise for reading a file
       return new Promise((resolve, reject)=>{
              fs.readFile(filepath,(err,data)=>{
                     if(err){
                            reject("Failed during read");
                     }
                     else{
                            resolve(data);
                     }
              })
       })
}
function write(filepath,input){                            //promise of writing the file
       return new Promise((resolve, reject)=>{
              fs.writeFile(filepath,input,(err)=>{
                     if(err){
                            reject("Failed during read");
                     }
                     else{
                            resolve("Completed");
                     }
              })
       })
} 
read(`${__dirname}/states.txt`)                         //reading and writing the file simultaneously
.then((data)=>{
       console.log(data.toString());
       return write(`${__dirname}/test.txt`,data)
       .then((data)=>{
              console.log(data);
       })
})
.catch((err)=>{
       console.log(err);
})
 

//ASYNC and AWAIT
const fileOperation= async()=>{                               
       try{
              const states=await read(`${__dirname}/states.txt`);
              const result=await write(`${__dirname}/test2.txt`,states);
              console.log(result);
       }catch(error){
              console.log(error);
       }
}
fileOperation();

//TASKS
//first----->states
//second----->capitals
//third------->state and capitals
