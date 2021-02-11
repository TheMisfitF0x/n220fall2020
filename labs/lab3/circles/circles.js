let r = 10;
function setup()
{
    createCanvas(1000, 1000);
    noFill();
    background(150, 150, 150);

    while(r < 500) 
    {
        circle(500, 500, r); 
        r += 10;
    }
}