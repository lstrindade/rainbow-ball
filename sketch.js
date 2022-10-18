var name = "Pedro"
var frutas = [11, 5, true, false, 24]

var ball = {
  x: 20,
  y: 30,
  r: 30,
  xSpeed: 0,
  ySpeed: 0,
  color: ["cyan", "Lime", "Indigo", "darkmagenta", "Crimson"]
}

function setup() 
{
  createCanvas(400, 400);
 
}

function draw() 
{
  background(220);

  circle(ball.x, ball.y, ball.r); 
  fill(ball.color[Math.round(random(0, 4))]); 

  ball.xSpeed = 1;
  ball.ySpeed = 1;

  ball.x = ball.x + ball.xSpeed;
  ball.y = ball.y + ball.ySpeed;
    
}

