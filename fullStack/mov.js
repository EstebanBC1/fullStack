let userMessage = prompt("Is this what you really want?");
userMessage = userMessage.toLowerCase(); 
if (userMessage === "yes"){
    console.log("this was a valid entry!");
}else{
    console.log("this was an invalid entry")
}