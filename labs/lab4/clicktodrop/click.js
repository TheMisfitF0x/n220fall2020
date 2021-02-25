let yPositions = [0];
let xPositions = [0];
function setup()
{

createCanvas(800, 600);

}



function draw()
{
    background(100, 100, 100);

    fill(100, 0, 0);

    if(mouseIsPressed)
    {
        yPositions.push(mouseY - 25);
        xPositions.push(mouseX - 50);
        rect(mouseX - 50, mouseY - 25, 100, 50)
    }

    for(let i = 0; i < yPositions.length; i++)
    {
        if(yPositions[i] < 550)
        {
            rect(xPositions[i], yPositions[i], 100, 50);
            yPositions[i] += 5;
        }
        else
        {
            yPositions.shift();
            xPositions.shift();
        }
    }
    console.log(yPositions.length);

}