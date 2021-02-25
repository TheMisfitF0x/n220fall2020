var ampli = .75; //Multiplier of the Tower Increase
var baseTowY = [10,30,80,40, 30]; //Base tower height
var baseTowX = [55,10,15,20,60]; // Base tower width
var colors = ["#f91f02", "#e06e04", "#1abc14", "#9940ed", "#40deed"]; //Color Values

function setup()
{
    createCanvas(1000, 800);
}

function draw()
{
    background(200, 200, 200); // Grey value for contrast
    fill(0,0,0);
    text("Mouse over the shapes", 200, 400, 900, 400); //Surface level instructions
    for(var i = 0; i < baseTowX.length; i++)
    {
        fill(colors[i]); //Changes the colors for funny
        rect(200 * i, 0, baseTowX[i], baseTowY[i]);//Drawing the rectangle
        if(mouseInBound(200 * i, (200 * i) + baseTowX[i], baseTowY[i]))//If within the tower, increases the tower by the amplifier per frame.
        {
            console.log("Detected in " + i); //Debug to see where the mouse is being seen
            baseTowX[i] += ampli;
            baseTowY[i] += ampli;
        }
    }

    
}

//Checks to see if mouse is in tower bounds, takes the left and right x and y of the tower's base values, using 0 as the default "top" of the tower.
function mouseInBound(towXL, towXR, towY)
{
    if(mouseX > towXL && mouseX < towXR && mouseY < towY && mouseY > 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

