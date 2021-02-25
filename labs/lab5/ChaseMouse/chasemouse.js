var circleX = 0;
var circleY = 0;

function setup()
{
    createCanvas(800, 400);
}

function draw()
{
    background(20,20,20);
    circle(circleX, circleY, 30);
    fill(200,200,200);
    circle(mouseX, mouseY, 7);

    if(circleUpdate() <= 7 && circleUpdate() >= -7)
    {
        fill(200, 0,0);
    }
    else
    {
        fill(0,0,0);
    }

    if(circleX < mouseX)
    {
        circleX += 3;
        if(circleY < mouseY)
        {
            circleY += 3;
        }
        else if(circleY > mouseY)
        {
            circleY -= 3;
        }
    }
    else if(circleX > mouseX)
    {
        circleX -= 3;
        if(circleY < mouseY)
        {
            circleY += 3;
        }
        else if(circleY > mouseY)
        {
            circleY -= 3;
        }
    }

    
}

function circleUpdate()
{
   var dist = Math.sqrt(((circleX - mouseX)*(circleX - mouseX)) + ((circleY - mouseY)*(circleY - mouseY)));
   return dist;
}