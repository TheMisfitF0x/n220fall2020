var characterToken = 
{
    x: 400,
    y: 200,
    r: 10,
    update: function()
    {
        circle(this.x, this.y, this.r);
        if(keyIsPressed)
        {
            switch (keyCode)
            {
                case UP_ARROW:
                    this.y -= 2;
                    break;
                    
                case DOWN_ARROW:
                    this.y += 2;
                    break;

                case LEFT_ARROW:
                    this.x -= 2;
                    break;

                case RIGHT_ARROW:
                    this.x += 2;
                    break;
                default: 
                    break;
            }

        }
    }
}

function setup()
{
    createCanvas(800, 400);
}

function draw()
{
    background(200, 200, 200);
    characterToken.update();

    
}

