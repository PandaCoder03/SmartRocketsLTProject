// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/bGz7mv2vD6g

var population;
// Each rocket is alive till 400 frames
var lifespan = 400;
//whaever waf here
var count = 0;
// Where rockets are trying to go
var target;
// Max force applied to rocket/speed of rocket
var maxforce = 0.2;
// Pause toggle
var paused = false;
// Controls whether completed = true or false
var hit = false;
// Dimensions of barrier
var rx = 100;
var ry = 150;
var rw = 200;
var rh = 10;

function setup() {
  createCanvas(400, 300);
  population = new Population();
  lifeP = createP();
  target = createVector(width / 2, 50);
}

function draw() {
  if (paused) {
    drawPausedScreen();
  } else {
    background(0);
    population.run();
    // Displays count to window
    lifeP.html(count);

    count++;
    if (count == lifespan) {
      population.evaluate();
      population.selection();
      // Population = new Population();
      count = 0;
    }
    // Renders barrier for rockets
    fill(255);
    rect(rx, ry, rw, rh);
    // Renders target
    if (hit === hit.population) {
      fill("lime");
    } else {
      fill(255);
      ellipse(target.x, target.y, 16, 16);
    }
  }
}
function keyPressed() {
  if (key === "p") paused = !paused;
  if (key === "f") {
    maxforce += 0.1;
    console.log("Your current speed is", maxforce);
  }
  if (key === "s") {
    maxforce -= 0.1;
    console.log("Your current speed is", maxforce);
  }
  if (key === "d") {
    console.log("Your current speed is", maxforce);
  }
}

function drawPausedScreen() {
  textAlign(CENTER, CENTER);
  textSize(50);
  textStyle(BOLDITALIC);
  fill("rgb(0,255,0)");
  text("PAUSED", width / 2, height / 2);
  fill("rgb(45,190,45)");
  text("PAUSED", width / 2 + 1, height / 2 + 1);
  fill("green");
  text("PAUSED", width / 2 + 2, height / 2 + 2);
  fill("gray");
}
