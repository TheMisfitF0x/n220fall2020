

//Constants Representing values I can use
//Radius Values
const BASE_RADIUS = 200; // The base radius to be divided
const RADIUS_MULTIPLIER = 5; // The intensity of the size increase based on distance
const RAD_MAX = 55; //Max Radius Value

//Animation values
const DROP_VALUE = 5; //Pixels per frame the circles drop when mousepressed
var isDropping = false;

//Position Values
const START_X = 40; //Starting X Value for first Circle
const X_SEPARATOR = 75; //Separation between cirlces

//Color Values
const COLOR_MAX = 255; //Max value for any one value of a color array
const BASE_COLOR = 50;
const COLOR_MULTIPLIER = 205; //The intensity of the color change based on distance

function setup()
{
    createCanvas(1000, 1000);
}

//Object array for 10 circles
//The X value is based on a starting value with a separator value and it's index. 
var myCircles = [
    {x: START_X, y:0, r:100, color: [255,255,255]},
    {x: START_X + (X_SEPARATOR * 1), y:0, r:100, color: [255,255,255]},
    {x: START_X + (X_SEPARATOR * 2), y:0, r:100, color: [255,255,255]},
    {x: START_X + (X_SEPARATOR * 3), y:0, r:100, color: [255,255,255]},
    {x: START_X + (X_SEPARATOR * 4), y:0, r:100, color: [255,255,255]},
    {x: START_X + (X_SEPARATOR * 5), y:0, r:100, color: [255,255,255]},
    {x: START_X + (X_SEPARATOR * 6), y:0, r:100, color: [255,255,255]},
    {x: START_X + (X_SEPARATOR * 7), y:0, r:100, color: [255,255,255]},
    {x: START_X + (X_SEPARATOR * 8), y:0, r:100, color: [255,255,255]},
    {x: START_X + (X_SEPARATOR * 9), y:0, r:100, color: [255,255,255]}
]

function draw()
{

    background(150, 150, 150);//Redraw the Background
    //For loop to iterate through the circles
    for(var i = 0; i < myCircles.length; i++)
    {
        console.log(isDropping);//Debugging console log
        if(isDropping == true)//Should it be dropping?
        {
            myCircles[i].y += DROP_VALUE;//Then drop this fast.
        }    
        else//Else Set it back to the mouse value
        {
            myCircles[i].y = mouseY;
        }
        
        myCircles[i].r = BASE_RADIUS / (mouseX - myCircles[i].x) * RADIUS_MULTIPLIER; //Closer Circles are larger, divide radius by separating value (distance * a multiplier)

        if(myCircles[i].r < 0)//Preventing negative values
        {
            myCircles[i].r *= -1; 
        }

        if(myCircles[i].r > RAD_MAX) //Decided to add a max to the radius to prevent it from becoming rediculous and painful to see
        {
            myCircles[i].r = RAD_MAX;
        }


        for(var x = 0; x < myCircles[i].color.length; x++) // Added this for loop to iterate through the three values of color arrays without writing it three times.
        {
            myCircles[i].color[x] = BASE_COLOR / (mouseX - myCircles[i].x) * COLOR_MULTIPLIER; //Closer Circles are brighter, divide color by value?

            if(myCircles[i].color[x] < 0)//Preventing negative values
            {
                myCircles[i].color[x] *= -1; 
            }

            if(myCircles[i].r > COLOR_MAX) //Decided to add a max to the radius to prevent it from becoming rediculous and painful to see
            {
                myCircles[i].r = COLOR_MAX;
            }

        }

        
        console.log(isDropping);
        if(isDropping == true)
        {
            myCircles[i].y += DROP_VALUE;
        }    
        else//Else Set it back to the mouse value
        {
            myCircles[i].y = mouseY;
        }
            
        

        // AND FINALLY, WE DRAW

        //if, for any reason, they are set above 1000 for their y value, set it back to 1000
        if(myCircles[i].y > 1000)
        {
            myCircles[i].y = 1000;
        }
        fill(myCircles[i].color);
        circle(myCircles[i].x, myCircles[i].y, myCircles[i].r);
    }

}

//Defining the MousePressed()
function mousePressed()
{
   isDropping = true;//It should be dropping
}

//Defining the MousePressed()
function mouseReleased()
{
    isDropping = false;//It shouldn't be dropping
}