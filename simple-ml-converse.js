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
    "Tell me something" : "The World is goona destroyed so, maintain your repo.",
    "jai shree ram" :"Jai shree Ram",
    "Best thing to learn" : "About your past",
    "is ai powerful" : "No! just pull out the plug",
    "how can i get a job" : "Learn skills and keep moving forward",
    "github link": "https://www.github.com/masterujjval",
    "what is ai" : "A doom for humanity",
    "does god exist?" : "Yep he does"
    

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
    document.querySelector("textarea").innerHTML="I don't know about this";
}   
})


