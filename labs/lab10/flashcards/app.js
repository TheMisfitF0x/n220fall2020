//The buttons
let buttons = document.getElementsByClassName("boxes");

//Main Element
let answerText = document.getElementById("answerText");

//Using a loop to add listeners
for(var i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click", displayAnswer);
}


//Function: use custom data tag to write answer to answerText
function displayAnswer(event)
{
    answerText.innerHTML = event.target.getAttribute("data-answer");
}