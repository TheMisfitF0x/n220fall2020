var colors = ["#f91f02", "#ffe83d", "#1abc14"];
function setup()
{
    createCanvas(800, 600);
}

function draw()
{
    background(20,20,20);
    fill(200,200,200);
    rect(300, 50, 200, 500);
    for(var i = 0; i < colors.length; i++)
    {
        fill(colors[i]);
        circle(400, 150 * (i+1), 60);
    }
}