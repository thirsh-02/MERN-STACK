//DATATYPES
*NUMBER
*BIGINT
*STRING
*NULL
*UNDEFINED
*SYMBOL
*OBJECTS

//OBJECT IN JS
const user={                    
     name:"Thirsha",
     age:18,
     mobno:9837465437,
     email:"abc@gmail.com",
     college:"sri eshwar",
 };

const user=Object.freeze({                    //freeze (constant no updation or deletion)
     name:"Thirsha",
     age:18,s
     mobno:9837465437,
     email:"abc@gmail.com",
     college:"sri eshwar",
 });

 const user=Object.keys({                       //keys
     name:"Thirsha",
     age:18,
     mobno:9837465437,
     email:"abc@gmail.com",
     college:"sri eshwar",
 });

const user=Object.values({                          //values
    name:"Thirsha",
    age:18,
    mobno:9837465437,
    email:"abc@gmail.com",
    college:"sri eshwar",
});
console.log(user);


const userx={                         //Mutation at object level only
    name:"x",                         // should not use this
    age:60                            
};
const usery=userx;                     //it refers the address of userx
usery.age=30;
console.log(userx,usery);


const userx={                        
    name:"x",                         
    age:60                            
};
const usery={...userx};                //spread operator doesnot refers the address just copies    
usery.age=30;
console.log(userx,usery);


const details={                                 //Nested objects
    address:{
        street: 'second street',
        city: 'coimbatore'
    }
};
console.log(details.address.city);


const details={                                 
   /* address:{
         street: 'second street',
         city: 'coimbatore'
     } */
    city: 'coimbatore'
};
console.log(details.address?.city);          //?(optional chain)-to prevent from error


//FUNCTIONS
syntax:
function function_name(p1,p2..){     //declaration and definition
}
function_name(p1,p2..);             //calling function
function sum(num1,num2){
    if(typeof(num1)==="number" && typeof(num2)==="number")
    console.log(num1+num2);
    else
    console.log("Invalid number");
}
sum("ftsd",5);

//double equal-to(only compares the value)
0==false   O/P=true
//triple equal-to(comapres the value and datatype)
0==true    O/P=false

//ARROW FUNCTION
const sum=(num1,num2) => {
    return num1+num2;      // return statement must
}
sum(1,2);
(OR)
const sum=(num1,num2) =>  num1+num2;
sum(1,2);

//IIFE :  Immediately invoking function expression(it is method of calling)
(function sum(num1,num2){
    if(typeof(num1)==="number" && typeof(num2)==="number")
    console.log(num1+num2);
    else
    console.log("Invalid number");
})(10,20);

//HIGH ORDER FUNCTION : Calling a function as parameter inside a function ,or a function returning a function
 const calci  = (num1,num2, operation)=>{
     return operation(num1,num2);
 }

 calci(10,20,(num1,num2)=>num1+num2);
(OR)
const sum=(num1,num2) => num1+num2;
const sub=(num1,num2) => num1-num2;
const mul=(num1,num2) => num1*num2;
const div=(num1,num2) => num1/num2;
const calci  = (num1,num2, operation)=>{  // operation func is callback function since this function is passed as parameter
    return operation(num1,num2);
}
calci(10,20,sum);


//TRIM
let str2="  im studying at sece  ";
console.log(str2.trim());    //destructive
console.log(str2);           //not destructive

//REPLACE
let str2="  im studying at sece  ";
console.log(str2.replace('e','o'));    // non-destructive(only first letter e will be changed)

let str2="  im studying at sece  ";
console.log(str2.replaceAll('e','o'));    // non-destructive(only first letter e will be changed)

//ARRAY
let arr = [1,2,"1234","hii"];
console.log(arr);

//ARRAY MEETHODS
let arr = [1,2,"1234","hii"];
arr.push(10);                               //Append  (more than one element can be added)
console.log(arr);

let arr = [1,2,"1234","hii"];
arr.pop(1);                                //last element removed
console.log(arr);

let arr = [1,2,"1234","hii"];
arr.unshift(10);                               //Add at first index(more than one elements added)
console.log(arr);

let arr = [1,2,"1234","hii"];
arr.shift(1);                               //first element removed(only one element removed)
console.log(arr);

//Accessing the function
let arr=[
     1,
     undefined,
     true,
     null,
     "123",
     '4',
     6.25,
     (num1)=>num1*5,
     {a:1,b:2,c:3, say_hello:()=>"hello"}
];
console.log(arr[7](5));

//Access the object and values of object
let arr=[
     1,
     undefined,
     true,
     null,
     "123",
     '4',
     6.25,
     (num1)=>num1*5,
     {a:1,b:2,c:3, say_hello:()=>"hello"}
];
console.log(arr[8].a);

//Access the Function inside array
let arr=[
     1,
     undefined,
     true,
     null,
     "123",
     '4',
     6.25,
     (num1)=>num1*5,
     {a:1,b:2,c:3, say_hello:()=>"hello"}
];
console.log(arr[7].say_hello());

//Two dimensional Array
let arr=[
     1,
     undefined,
     true,
     null,
     "123",
     '4',
     [6.25,4,6,7],
     (num1)=>num1*5,
     {a:1,b:2,c:3, say_hello:()=>"hello"}
];
console.log(arr[6][1]);

//getting the keys of 8th element
for(key in arr[8]){
  console.log(key,arr[8][key]);  or console.log(key,arr[8].key);
}

//Different methods of inserting values
let arr=[1,2,3,4];
arr.push(5);
console.log(arr);
arr.unshift(6);
console.log(arr)                     // At a specific position
arr.splice(2,0,7);                   //splice(index,delete count,number to be inserted)   //destructive

//SLICING
let names=["Thirsha","Vaisaa","Sumiii","Sweee"];
console.log(names.slice(1,3));      //slice(start index,end index)  //non-destructive

//SPLICING
let names=["Thirsha","Vaisaa","Sumiii","Sweee"];
names.splice(4,0,"Snehaa","Saar");
console.log(names);

//String slicing
let b1="harish";
console.log(b1.slice(1,b1.length))

//Spliting
let str1="sri eshwar college";               //non-destructive   //only for string
let str2=str1.split(" ");
console.log(str2);

//Joining
let str1="sri eshwar college";              //Only for array
let a=str1.split(" ");
console.log(a.join(" "));

//UPPERCASE , LOWERCASE                     //non-destructive 
let str1="sri eshwar college";
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());         

//CAMELCASE
let names="madhu akshaya priya ishwarya saranya";
let arr=names.split(" ");
let ans=[];
for(let i=0;i<arr.length;i++){
    ans.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1,arr[i].length));
}
let final = ans.join(" ");
console.log(final);
