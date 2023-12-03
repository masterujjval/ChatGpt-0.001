

let d=new Date();

let obj=
{
    "what is your name" : "my name is cosmos",
    "whats your name" : "i'm cosmos",
    "i love you" : "i love you too",
    "who created you"  : "my master created me!",
    "who lost the world cup recently" : "Australia lost the world cup",
    "today date" : `today date and time is ${d}`,
    "date" : `today date and time is ${d}`,
    "day" : `today date and time is ${d}`,
    "today day" : `today date and time is ${d}`,
    "time" : `today date and time is ${d}`,
    "what time it is" : `today date and time is ${d}`,
    "who is your master" : "overlord sir ujjwal",
    "which is the best language to learn" : "obviously thats Javascript",
    "best programming language" : "that's one and only javascript",
    "who are you" : "Im you",
    "i want to add something" : "You can add questions by making chaneges in github repo",
    "fuck you" : "fuck you too",
    "tell me a joke" : "why math book is sad? because it has too many problems.",
}




let btn=document.querySelector("button");

let input=document.querySelector(".enter");

btn.addEventListener("click",(e)=>{
let c=input.value;
let temp=c.replace(/^\s+|\s+$/gm,'');
if(obj[temp]){
    document.querySelector("textarea").innerHTML=obj[temp];
}
else{
    document.querySelector("textarea").innerHTML="I dont know about this";
}   
})


