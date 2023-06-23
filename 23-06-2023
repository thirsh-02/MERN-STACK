//Add, delete and edit using id
export const USER_DATA=[        // export is used for exporting the data to other file, in other file this should be imported using (import {whatever exported} from "./modulename.js")    
    {                           // in html for exporting (<script type="module" src="file_name.js"></script>
    id:1,
    name:"Thirsha",
    age:18,
    email:"abc@gmail.com"
}
];
//CRUD
const addUser=(new_user)=>{
      USER_DATA.push(new_user);
}
addUser({id:2,name:"Sushmitha",age:13,email:"xyz@gmail.com"});

const editUser=(nid,nkey,value)=>{
      for(let i=0;i<USER_DATA.length;i++){
        if(USER_DATA[i].id==nid){
              USER_DATA[i][nkey]=value;  //use square brackets for get the value
        }
      }
}
editUser(2,"age",14);

const editMParameters=(nid,update_obj)=>{           //Editing multiple parameters
    for(let i=0;i<USER_DATA.length;i++){
        if(USER_DATA[i].id==nid){
            for(key in update_obj){                        //Easy to traverse through objects
                USER_DATA[i][key]=update_obj[key];         //new parameter cant be added
            }
        }
    }
}
editMParameters(1,{name:"Deepa",age:39});
console.log(USER_DATA);
(OR)
const editMparameters=(id,update_obj)=>{
const index=USER_DATA.findIndex((val)=>val.id===id);
if(index!=-1){
    USER_DATA[index]={
        ...USER_DATA[index],                               //spread operator-->values like id,name,age,email
        ...update_obj                                      // whatever will give here.. if the parameter is present then it updates with new value or the new parameter is added
    }
}
}
editMparameters(1,{name:"Murugesan",age:39});
console.log(USER_DATA);


const deluser=(nid)=>{
    for(let i=0;i<USER_DATA.length;i++){
         if(USER_DATA[i].id==nid){
            USER_DATA.slice(i,1);
         }
    }
}
deluser(1);


//only once the default export can be used for only one function
syntax: export default USER_DATA (at the end can be given) even if name is changed in import file even then it calls the default function

//if normally imported then the aliasing of names can be done
eg:
import user,{
      adduser as add,
      edituser as edit,
      deleteuser as delete
}    // as is used for alias name



//DOM ---> document object model

document.body.innerText="hello";    // to add the text dynamically using javascript
document.body.innerHTML="<div>hello</div>   // innerhtml is used for adding the tags

document.body.innerHTML="<div>hello</div>";    // to change the color of the background
document.body.style.backgroundColor="teal";

//using children() will return elements with tag
//using childrenNode() will return all the text,tags,nodes,comment etc
const allChild=document.body.children;
allChild[1].style.color="green";

//change the color of each div with a time interval
const allChild=document.body.children;
setTimeout(()=>
{
    allChild[0].style.color="red";
},3000)
setTimeout(()=>
{
    allChild[1].style.color="yellow";
},6000)
setTimeout(()=>
{
    allChild[2].style.color="green";
},9000)

//change the color with wording 
const allChild=document.body.children;
setTimeout(()=>
{
    allChild[0].innerText="RED";
    allChild[0].style.color="red";
},3000)
setTimeout(()=>
{
    allChild[1].innerText="YELLOW";
    allChild[1].style.color="yellow";
},6000)
setTimeout(()=>
{
    allChild[2].innerText="GREEN";
    allChild[2].style.color="green";
},9000)

//Using different colours after a time inteval
const allChild=document.body.children;
let col=["red","blue","green","violet","pink"];
let i=0;
const func=()=>{
    allChild[0].style.color=col[i];
    i++;
    if(i>col.length)
    i=0;
}
setInterval(()=>
{
    func()
},3000);


// selecting based on class and id
let sel=document.getElementsByClassName("cse"); // same class can be used in different tag
let sel1=document.getElementById("unique"); // id should be unique,no repeatation allowed

*************************************************************************************************************************
//LOGIN PAGE

//html***********************
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width>, initial-scale=1.0">
    <title>Document</title>
     
</head>
<body>
    <div><form action="">
        <div>
            <label for="">Username</label>
                <input type="text">
        </div>
        <div>
            <label for="">Password</label>
                <input type="text">
        </div>
        <button>Login</button>
    </form>
</div>
    <script type="module" src="index.js"></script>
</body>
</html>


//javascript************************************************************************************************************
const button=document.getElementById("login-button");
const username=document.getElementById("user");
const password=document.getElementById("pass");
const form=document.getElementById("login");
button.addEventListener('click',(event)=>                       //when button is clicked then event is passed and this function is called.
{
console.log(event);
}
)
form.addEventListener('submit',(event)=>                       //when button is clicked then event is passed and this function is called.
{
    event.preventDefault();                                    //stops the default behavior so username name and passwaord will not be displayed on web search bar
    console.log(username.value);
}
)
