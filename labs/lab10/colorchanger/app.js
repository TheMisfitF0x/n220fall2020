//Elements
let redman = document.getElementById("redman");
let greenman = document.getElementById("greenman");
let blueman = document.getElementById("blueman");

//Adding the listeners
redman.addEventListener("click", changeColor);
greenman.addEventListener("click", changeColor);
blueman.addEventListener("click", changeColor);

//The colors
let red = "#990000";
let green = "#009900";
let blue = "#000099";

//The function
//Could do an array or just hardcode based on the names. 
//Probably the latter cuz I'm feeling TRULY lazy atm.
function changeColor(event)
{
    if(event.target.getAttribute("data-rgb") == "red")
    {
        event.target.style.backgroundColor = red;
    }

    if(event.target.getAttribute("data-rgb") == "green")
    {
        event.target.style.backgroundColor = green;
    }

    if(event.target.getAttribute("data-rgb") == "blue")
    {
        event.target.style.backgroundColor = blue;
    }


}