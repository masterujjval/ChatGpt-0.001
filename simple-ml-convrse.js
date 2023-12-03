//styling
document.getElementById("msg").style.color="white"
document.getElementById("msg").style.fontSize="large" 

//-----------------------------------------------------------------

let d=new Date();

let obj=
{
    "what is your name" : "My name is cosmos",
    "whats your name" : "I'm cosmos",
    "i love you" : "I love you too",
    "who created you"  : "My master created me!",
    "who lost the world cup recently" : "Australia lost the world cup",
    "today date" : `Today date and time is ${d}`,
    "date" : `Today date and time is ${d}`,
    "day" : `Today date and time is ${d}`,
    "today day" : `Today date and time is ${d}`,
    "time" : `Today date and time is ${d}`,
    "what time it is" : `Today date and time is ${d}`,
    "who is your master" : "Overlord sir ujjwal",
    "which is the best language to learn" : "Obviously thats Javascript",
    "best programming language" : "That's one and only javascript",
    "who are you" : "I'm you",
    "i want to add something" : "You can add questions by making chaneges in github repo",
    "fuck you" : "Fuck you too",
    "tell me a joke" : "Why math book is sad? because it has too many problems.",
}




let btn=document.querySelector("button");

let input=document.querySelector(".enter");

btn.addEventListener("click",(e)=>{
let c=input.value;
let temp=c.replace(/^\s+|\s+$/gm,'');
let n=temp.toLowerCase();
if(obj[n]){
    document.querySelector("textarea").innerHTML=obj[n];
}
else{
    document.querySelector("textarea").innerHTML="I dont know about this";
}   
})


