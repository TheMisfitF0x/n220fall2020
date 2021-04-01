let valueField = document.getElementById("valueIn");

function calcTip()
{
    var bill = Number(valueField.value);
    var tip = bill * .1;
    var fullCharge = bill + tip;
    if(isNaN(bill))
        console.log("No")
    else
        console.log("Tip: $" + tip + " Total: $" + fullCharge);
        
}