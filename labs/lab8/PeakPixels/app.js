//Div Block Reference
let theSquare = document.getElementById("theSquare");

//Making THE SQUARE
theSquare.style.width = "100px";
theSquare.style.height = "100px";
theSquare.style.backgroundColor = "#009900";

let h = 100;
let w = 100;


//Two new functions
function makeBig()
{
   h += (h * .10);
   w += (w * .10);

   theSquare.style.width = w + "px";
   theSquare.style.height = h + "px";
}