//Settings Array
/*Index List (and defaults):
0: Radius(25)
1: Red(0)
2: Green(0)
3: Blue(0)
4: BGRed(255)
5: BGGreen(255)
6: BGBlue(255)
7: Shape(0) (0:Circle; 1: Square)
*/
var settings = [25, 0, 0, 0, 255, 255, 255, 0]

//Drawn shapes array of objects. This first one exists as a template that future ones can follow.
var oldShapes = [
    {x:600, y:600, r:0, g:0, b:0, radius:1, shape:0}
]

//Input Array (Necessary to update settings using inputs)
var inputs = document.getElementsByClassName("input");
console.log(inputs);

//Buttons Array
buttons = document.getElementsByClassName("settingButton")

//Loop listeners into the buttons
for(var i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click", updateSetting);
}

//Preview Elements (For teh colors)
let brPreview = document.getElementById("BrushPreview");
let bgPreview = document.getElementById("BackgroundPreview");
let counter = document.getElementById("counter");

//Create the canvas. That's about it. Oh and makes sure you aren't drawing ugly lines around your circles/boxes
function setup()
{
    createCanvas(900, 700);
    noStroke();
}

//This will re-draw every shape in teh drawnShapes array of objects. Will also draw a preview shape.
//If mouse is pressed, draws and then defines a new oldShape using the settings array and mouseData
function draw()
{
    background(settings[4], settings[5], settings[6]);
    for(var x = 0; x < oldShapes.length; x++)
    {
        drawCShape(oldShapes[x].radius, oldShapes[x].x, oldShapes[x].y, oldShapes[x].r, oldShapes[x].g, oldShapes[x].b, oldShapes[x].shape);
    }
    drawCShape(settings[0], mouseX, mouseY, settings[1], settings[2], settings[3], settings[7]);

    if(mouseIsPressed)
    {
        drawCShape(settings[0], mouseX, mouseY, settings[1], settings[2], settings[3], settings[7] )
        oldShapes[oldShapes.length] = {x:mouseX, y:mouseY, r:settings[1], g:settings[2], b:settings[3], radius:settings[0], shape:settings[7]}
    }
    counter.innerHTML = "Shapes Counter: " + (oldShapes.length - 1);  
}


//Draws teh shape (circle or square based on setting)
//Also ensures that rectangles are centered on cursor and are the same size(ish) as the circle is(hence why only the radius is necessary)
function drawCShape(rad, x, y, r, g, b, type)
{
    
    fill(r,g,b);
    if(type == 0)
    {
        circle(x, y, rad);
    }
    else
    {
        rect(x - rad, y - rad, rad*2, rad*2);
    }
    
}

//When the update button is pressed, it updates all setting changes using the input array. If either circle/square is pressed(detected using data-modify), only changes shape type
function updateSetting(event)
{
    if(event.target.getAttribute("data-modify") == 7)
    {
        settings[7] = event.target.getAttribute("data-val");

    }
    else
    {
        for(var s = 0; s < settings.length - 1; s++)
        {
            
            if(inputs[s].value == "")
            {
                settings[s] = settings[s];
            }
            else
            {
                settings[s] = inputs[s].value;
            }
            inputs[s].value = "";
            inputs[s].placeholder = settings[s];
        }

        brPreview.style.backgroundColor = "rgb("+settings[1]+","+settings[2]+","+settings[3]+")"
        bgPreview.style.backgroundColor = "rgb("+settings[4]+","+settings[5]+","+settings[6]+")"

    }
}