Node Package Manager(npm)-------->inbuild,public
--> It consists of a meta data(using express as the back end)
//npm init (in console)-----> creates a json file
//npm install express---->creates a node modules which consists of the files installed
//npm uninstall express-------->for uninstalling the package
json---->java script object notation
---->stores data using key and values pair
----> starts and ends with curly braces
----> key and values should be in double quotes, except numbers,true and false
----> It may have child objects

personal.json****************************************************************************************************
{
    "name":"Thirsha",
    "age": 18,
    "college":"Sri Eshwar College",
    "Parents":{
        "mother":"Deepa",
        "father":"Murugesan"
    },
"address":{                                
        "city":"ooty", 
        "district":"nilgiri",
        "pincode":643005,
        "state":"Tamilnadu"
    },
   "mobno":6478398635
}


index.js************************************************************************************************************
const info=require(`./personal.json`);
console.log(info.name);
console.log(info.age);
console.log(info.Parents);
console.log(info.address.city);
console.log(info.address.district);
console.log(info.address.pincode);
console.log(info.address.state);

(OR)

const info=require(`./personal.json`);
const key='name'
console.log(info[key]);

//For printing all the keys
const info=require(`./personal.json`);
const arr=[]
for(key in info){
    arr.push(key);
}
for(key in arr){                               //key in arrays will take the index values so we use arr[key]
    console.log(info[arr[key]]);
}

//To get keyss
console.log(Object.keys(info))
console.log(Object.values(info))