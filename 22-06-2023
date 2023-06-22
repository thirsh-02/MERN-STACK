//Palindrome
function Palindrome(str){
    let i=0,j=str.length-1;
    while(i<j){
        if(str.charAt(i)!=str.charAt(j)){
           return false;
        }
        i++; 
        j--;
    }
    return true;
};
console.log(Palindrome("hello"));

(OR)  

let str="malayalam";
let pal=str.split("");
pal.reverse();
let ans=pal.join("");
console.log(ans);
if(str == pal){
    console.log("True")
}
else{
    console.log("False");
}

//LOOPS
//FOR IN
let obj={                           //Mostly used for traversing a object
    a:1,b:2,c:3                     // if applied to array index values are obtained
};
for(let key in obj){
    console.log(key,object(key))
}

//LOOPS
//FOR OF ---> ES6
let arr=[1,2,3,4,5];                                //Mostly used for arrays
for(let key of arr){                                //directly key values can be obtained
    console.log(key);
}

// Array callback methods
let names=["Thisha","Vaisaaa","Sumiii","Sweee"];
names.forEach((ele)=>{
    console.log(ele);
})

//repeat
// Array callback methods
let names=["Thisha","Vaisaaa","Sumiii","Sweee"];
names.forEach((ele)=>{
    console.log(ele.repeat(2));
})

// Array callback methods
let names=["Thisha","Vaisaaa","Sumiii","Sweee"];  //if one argument is passed in arraw function then brackets are optional
names.forEach(ele=>{                              //if one statement then curly braces optional
    console.log(ele);
})

//Map()--> same as foreach but returns as array
arr=["Hello","Hii","Welcome"];
let ans=arr.map(ele => ele);
console.log(ans);

//Filter --> here return should be condition thenn ele will be pushed
let num=[1,2,3,4,5];
let ans=num.filter(ele =>{
    return ele%2;                        //returns odd
})
console.log(ans);

let num=[1,2,3,4,5];
let ans=num.filter(ele =>{
    return !(ele%2);                        //returns even
})
console.log(ans);


//TASK: return array of names above the birth year 2002
let names_obj=[
    {
        name:"Thirsha",
        dob:2003
    },
    {
        name:"Sushmitha",
        dob:2009
    },
    {
        name:"Murugesan",
        dob:1872
    },
    {
        name:"Deepa",
        dob:1880
    }
];                                                             
let ans=names_obj.map(ele=>{                               //using map function
    if(ele.dob>=2002) return ele.name;
})
console.log(ans);


let ans1=name_obj.filter(ele=>ele.dob>=2003);               //using filter
let names=ans.map(ele => ele.name);
console.log(names);


let ans2=name_obj.filter(ele=>ele.dob>=2003).map(ele => ele.name);         //using map and filter
console.log(ans2);

//shallow copy
const arr=[1,2,3,4,5];   // reference is copied. both the array points to the same container  also for objects
const arr2=arr;
arr[2]=200;
console.log(arr2,arr);

//Deep copy
const arr=[1,2,3,4,5];   // whole array is copied. both the array points to the different container   also for objects
const arr2={...arr};
arr[2]=200;
console.log(arr2,arr);

//overiding the values
const obj={                 //order wont be changed only the value overrides
    name:"sush",
    age:14,
    name:"thirsh"
};
console.log(obj);


//task: employee object-->name,age,salary,mobno
//Return the object name and age who has salary above than 25000 in the form of array of objects
let employee=[
    {
        name:"Ramesh",
        age:20,
        salary:30000,
        mobno:8765432901
    },
    {
        name:"Suresh",
        age:20,
        salary:24000,
        mobno:6543210987
    },
    {
        name:"Abishek",
        age:23,
        salary:60000,
        mobno:9078563412
    },
    {
        name:"Harish",
        age:25,
        salary:40000,
        mobno:9567890123
    }
];
let ans=employee.filter((ele)=>ele.salary>=25000).map((ele)=>[ele.name,ele.age]);       //array
console.log(ans);

let ans1=employee.filter((ele)=>ele.salary>=25000).map(ele=>{                //array of objects
    return {name:ele.name,age:ele.age}; 
});
console.log(ans1);

//De-structuring array elements ----> unpacking elements
let arr=[10,20,30,40,50];
let[a,b,c,d,e]=arr;
console.log(a);

//De-structuring ----> unpacking elements
let arr=[10,20,30,40,50,60,70];
let[a,b,c,d,...e]=arr;          // rest operator in destructuring
console.log(a,b,c,d,e);

//De-structuring ----> unpacking elements
let arr=[10,20,30,40,50];            // 30 should be skipped
let[a,b,,c,d]=arr;          
console.log(a,b,c,d);


//Objects De-structuring ----> unpacking elements
let obj={
    name:"sece",
    year:2024,
    city:"cbe",
    dept:"mech",
    lpa:"50lpa",
};
let {name,year,city,...next} = obj;     //rest operator
console.log(name,year,city,next);


//Objects De-structuring ----> unpacking elements
let obj={
    name:"sece",
    year:2024,
    city:"cbe",
    dept:"mech",
    lpa:"50lpa",
};
let {name: clg_name,year,city,...next} = obj;     //rename operator (original name will be deleted)
console.log(clg_name,year,city,next);


//Objects De-structuring ----> unpacking elements
let obj={
    name:"sece",
    year:2024,
    city:"cbe",
    dept:"mech",
    lpa:"50lpa",
};
let {name: clg_name,year,city,color="green"} = obj;     //if field not in object (o/p)=>green
console.log(clg_name,year,city,color);   

//Objects De-structuring ----> unpacking elements
let obj={
    name:"sece",
    year:2024,
    city:"cbe",
    dept:"mech",
    lpa:"50lpa",
    color:"blue";
};
let {name: clg_name,year,city,color="green"} = obj;     //if field is already present (o/p)=>blue  
console.log(clg_name,year,city,color);   

//excuting each time after a particular time.
setInterval(()=>console.log('hello'),1000);

//excuting after a particular time.
setTimeout(()=>console.log('hello'),3000);        --->Asynchornous 


//promise
//state=pending,resolve,reject
const abc=fetch('https://jsonplaceholder.typicode.com/todos')
console.log(abc);
      
       abc.then(response => response.json())
       .then(json => console.log(json))                // returns the promise
       .catch(val => console.log(val))                 // if any error occurs, catch will handle
(OR)
const apiCall=async()=>           //async---> for using await function
{
   try{
const promise_from_api=await fetch('https://jsonplaceholder.typicode.com/todos')
    const data=await promise_from_api.json();
    console.log(data);
} catch(error){
   console.log(error)
}
}
apiCall();

//Example using setTimeOut
const abc=new Promise(resolve,reject)=>{
setTimeout(()=>
{
    resolve("Done");
},1000)
})
abc.then((value)=>console.log(value)).catch((error)=>console.log('error',error));
