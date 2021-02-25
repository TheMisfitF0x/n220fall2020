let xPosAr = [0,0,0,0,0,0,0,0,0,0];
let yPosAr = [0,0,0,0,0,0,0,0,0,0];

function setup()
{
createCanvas(800, 600);
}

function draw()
{
    background(100, 100, 100);

    xPosAr.push(mouseX);
    yPosAr.push(mouseY);

    xPosAr.shift();
    yPosAr.shift();
    
    fill("red"); //Just a color String I picked at random, pls don't freak out
    for(let i = 0; i < xPosAr.length; i++)
    {
        circle(xPosAr[i], yPosAr[i], 10);
    }
}