var ballPos = 0;

function setup()
{
    let circlePos = 10;
    createCanvas(800, 600);
    for(let i = 0; i < 25; i++)
    {
        if(i % 3 === 0 && i % 5 === 0)
        {
            fill(0,0,200);
            rect(circlePos - 10, 290, 20, 20)
            noFill();
        }
        else if(i % 3 == 0)
        {
            fill(200, 0, 200);
            circle(circlePos, 300, 10);
            noFill();
        }
        else if(i % 5 == 0)
        {
            fill(0,100,0);
            rect(circlePos - 10, 290, 20, 20)
            noFill();
        }
        else
        {
            fill(0,0,0);
            circle(circlePos, 300, 10);
        }
        circlePos += 20;
    }
}