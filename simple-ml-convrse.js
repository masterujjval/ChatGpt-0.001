//styling
document.getElementById("msg").style.color="white"
document.getElementById("msg").style.fontSize="large" 

//-----------------------------------------------------------------

let d=new Date();

let obj=
{
    "What is your name" : "My name is cosmos",
    "what's your name" : "I'm cosmos",
    "I love you" : "I love you too",
    "who created you"  : "My master created me!",
    "who lost the World Cup recently" : "Australia lost the World Cup",
    "today date" : `Today date and time is ${d}`,
    "date" : `Today date and time is ${d}`,
    "day" : `Today date and time is ${d}`,
    "today day" : `Today date and time is ${d}`,
    "time" : `Today date and time is ${d}`,
    "what time it is" : `Today date and time is ${d}`,
    "Who is your master" : "Overlord sir ujjwal",
    "which is the best language to learn" : "Obviously that's Javascript",
    "best programming language" : "That's one and only javascript",
    "Who are you" : "I'm you",
    "I want to add something" : "You can add questions by making changes in GitHub repo",
    "fuck you" : "Fuck you too",
    "tell me a joke" : "Why math book is sad? Because it has too many problems.",
    "hy":"Hello human",
    "hi":"Hello human",
    "how are you" : "Im good as always",
    "I'm also fine" :"That's so good",
    "I'm also good" : "Better than being bad",
    

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


