let arrayTag = document.getElementById("arInput"); //get the input now.

let foundDis = document.getElementById("foundDis");
let amtDis = document.getElementById("amtDis");

function filterMe()//Grab teh array and find the baddies
{
    let words = arrayTag.value.split(" ");//da array
    let amt = 0;//das da words found
    
    

    for(let i = 0; i < words.length; i++)//go through words[] and find the bad.
    {
        if(words[i] == "clear"||words[i] == "water" ||words[i] == "tires")
        {
            amt++;

        }
    }

    amtDis.innerHTML = amt;//update the values on the page
    if(amt > 0)
    {
        foundDis.innerHTML = "Yes"
    }
    else
    {
        foundDis.innerHTML = "No"
    }
}