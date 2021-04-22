//Elements into an array based on class
let buttons = document.getElementsByClassName("colorButtons");

//Main Element
let theBox = document.getElementById("theBox");

//Counter Element
let theInformant = document.getElementById("theInformant");

//ColorArray
let colorCombo = [0, 0, 0];

//Me checking that they all exist in proper order
console.log(buttons);

//Using a loop to add listeners
for(var i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click", addColor);
}


//Function: use custom attr to get the amount to add, and another to get the color
//add color amt and type to main. No hard coded anything. All of it is a simple 1 off.
//Actually really proud of how well this works.......
function addColor(event)
{
    var addAmt = Number(event.target.getAttribute("data-add")); console.log(addAmt);
    var addCol = Number(event.target.getAttribute("data-col")); console.log(addCol);

    colorCombo[addCol] += addAmt; console.log(colorCombo);

    theBox.style.backgroundColor = "rgb(" + colorCombo[0] + ","+ colorCombo[1] + ","+ colorCombo[2] + ")";
    console.log(theBox.style.backgroundColor);

    theInformant.innerHTML = "Color: rgb(" + colorCombo[0] + ","+ colorCombo[1] + ","+ colorCombo[2] + ")";
}