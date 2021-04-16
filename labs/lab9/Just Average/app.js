let arrayTag = document.getElementById("arInput"); //get the input now.

let sumDis = document.getElementById("sumDis");
let avgDis = document.getElementById("avgDis");

function calculateNums()//Grab teh array and do the maffs
{
    let nums = arrayTag.value.split(",");//da array
    let sum = 0;//das da total
    let avg = 0;//das da average
    console.log(nums[0] + nums[1]);

    for(let i = 0; i < nums.length; i++)//go through nums[], make em all numbers, add them up.
    {
        nums[i] = Number(nums[i]);
        sum += nums[i];
    }
    avg = sum/(nums.length-1);//calc da average


    sumDis.innerHTML = sum;//update the values on the page
    avgDis.innerHTML = avg;
    arrayTag.value = "";
}
