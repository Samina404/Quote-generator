const quotation=document.getElementById("quote");
const author=document.getElementById("author");
const byt=document.getElementById("btn");
const welcomeMessage = document.getElementById('welcomeMessage');

const apiurl="https://official-joke-api.appspot.com/random_joke";
async function getquotes (url) 

{
    const response=await fetch(url);
    var data=await response.json();
   // console.log(data);
    quotation.innerHTML=data.setup;
    author.innerHTML="~"+data.punchline;
}
byt.onclick= ()=>{
    // ok();
   

    // Show the joke container
    welcomeMessage.remove();
     getquotes(apiurl);
 };
 
 function fb(){
    window.open("https://twitter.com/intent/tweet?text= " + quotation.innerHTML,"facebook window",
        "width=600,height=300");
    
 }

 



