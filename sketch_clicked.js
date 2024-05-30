let fontL, fontR, fontM, fontB, fontBk;
// let infoB;
let cows, goats, sheep, pigs, ducks, chickens, fish;
let earth;
let ctx;
let grad, grad2;
let subIn = 46;
let slider;


function preload() {
  infoB = loadImage('assets/infographic.jpg');
  fontL = loadFont("fonts/Roboto-Light.ttf");
  fontR = loadFont("fonts/Roboto-Regular.ttf");
  fontM = loadFont("fonts/Roboto-Medium.ttf");
  fontB = loadFont("fonts/Roboto-Bold.ttf");
  fontBk = loadFont("fonts/Roboto-Black.ttf");

  cows = loadImage("assets/Orange.png");
  goats = loadImage("assets/MediumTurquoise.png");
  sheep = loadImage("assets/YellowGreen.png");
  pigs = loadImage("assets/Rosy.png");
  ducks = loadImage("assets/MediumAquaMarine.png");
  chickens = loadImage("assets/Plum.png");
  fish = loadImage("assets/SkyBlue.png");
  earth = loadImage("assets/earth.png");
}

function setup() {
  createCanvas(800, 2500);

  ctx = drawingContext;
  grad = ctx.createLinearGradient(0, 0, 0, 220);
  grad.addColorStop(0, "purple");
  grad.addColorStop(0.5, "orange");
  // grad.addColorStop(0.5, "sandybrown");
  
  grad2 = ctx.createLinearGradient(0, 1840, 0, 2500);
  grad2.addColorStop(0.3, "SteelBlue");
  grad2.addColorStop(1, "Aqua");

  slider = createSlider(0, 255, 0);
  slider.position(320, 2420);
  slider.size(150);
}

function draw() {
  background(255);
  // image(infoB, 0, 0);

  //headline
  ctx.fillStyle = grad;
  noStroke();
  rect(0, 0, 800, 220);

  textFont(fontBk);
  textSize(48);
  fill(255)
  text("How many animals get", 151, 106);
  text("slaughtered every day?", 145, 164);

  section1();
  section2();
  section3();

  //earth color
  let g = slider.value();
  fill(g,150);
  ellipse(400, 2253, 276, 276);

}

function section1() {  //subtitle 1
  let value = 0;
  let spaceX = 375;
  let spaceY = 153;
  
  fill(242);
  rect(0, 220, 800, 770);

  textFont(fontB);
  textSize(38);
  fill(0)
  text("Hundreas of milions of animals get", 100,288);
  text("killed for meat every day.", 184, 288+subIn);

  image (cows, 45, 370);
  image (goats, 420, 370);
  image (sheep, 45, 370+spaceY);
  image (pigs, 420, 370+spaceY);
  image (ducks, 45, 370+spaceY*2);
  image (chickens, 420, 370+spaceY*2);
  image (fish, 45, 370+spaceY*3);

  //circle
  // ellipse (114, 439, 137);
  // ellipse (114+spaceX, 439, 137);
  // ellipse (114, 439+spaceY, 137);

  push();
  for (let x = 0; x < 2; ++x) {
    for (let y = 0; y < 4; ++y) {
      noFill();
      ellipse (114+x*spaceX, 439+y*spaceY, 137, 137 );
    }
  }
  pop();

  push();
  fill(value);
  textFont(fontR);
  textSize(30);
  textAlign(CENTER);
  text("900,000", 265, 435);
  text("cows", 265, 465);
  text("1.4 million", 640, 435);
  text("goats", 640, 465);

  text("1.7 million", 265, 435+spaceY);
  text("sheep", 265, 465+spaceY);
  text("3.8 million", 640, 435+spaceY);
  text("pigs", 640, 465+spaceY);

  text("12 million", 265, 435+spaceY*2);
  text("ducks", 265, 465+spaceY*2);
  text("202 million", 640, 435+spaceY*2);
  text("chickens", 640, 465+spaceY*2);

  text("Hundreds of millions", 343, 435+spaceY*3);
  text("of fish", 343, 465+spaceY*3);

  pop();
}

function mouseClicked() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }

}

function section2() {  //subtitle 2
  let interval = 135;
  let spacing = 37;
  let tInt2 = 23;

  text("What would be the benefits of", 145, 1058);
  text("reducing our meat consumption?", 117, 1058+subIn);

  push();
  textFont(fontM);
  textSize(27);

  fill("Crimson");
  rect(308, 1130, spacing, 4);
  ellipse(80, 1220, 60, 60);
  text("Less land use for agriculture and more biodiversity", 130, 1190);

  fill("GoldenRod");
  rect(308+spacing*1, 1130, spacing, 4);
  ellipse(80, 1220+interval, 60, 60);
  text("Benefits for the world’s climate", 130, 1190+interval);

  fill("DarkTurquoise");
  rect(308+spacing*2, 1130, spacing, 4);
  ellipse(80, 1220+interval*2, 60, 60);
  text("Less antibiotic resistance", 130, 1190+interval*2);

  fill("SteelBlue");
  rect(308+spacing*3, 1130, spacing, 4);
  ellipse(80, 1220+interval*3, 60, 60);
  text("Lower risk of pandemics", 130, 1190+interval*3);

  fill("YellowGreen");
  rect(308+spacing*4, 1130, spacing, 4);
  ellipse(80, 1220+interval*4, 60, 60);
  text("Less animal suffering", 130, 1190+interval*4);

  fill(255);
  text("1", 73, 1228);
  text("2", 73, 1228+interval);
  text("3", 73, 1228+interval*2);
  text("4", 73, 1228+interval*3);
  text("5", 73, 1228+interval*4);

  textFont(fontR);
  textSize(18);
  fill(130);
  text("Reducing meat consumption could shrink agricultural land from 4 to", 130, 1225);
  text("1 billion hectares, allowing wilderness to regrow and support wildlife", 130, 1225+tInt2);
  text("habitats.", 130, 1225+tInt2*2);

  text("Reducing global meat consumption would lower direct emissions from", 130, 1225+interval);
  text("livestock and manure while also decreasing emissions from deforestation", 130, 1225+interval+tInt2);
  text("and land use changes; consequently, would help slowdown global warming.", 130, 1225+interval+tInt2*2);

  text("Reducing meat consumption would lower antibiotic use in livestock", 130, 1225+interval*2);
  text("farming, helping to prevent the rise of antibiotic-resistant bacteria and", 130, 1225+interval*2+tInt2);
  text("preserving the efficacy of existing antibiotics.", 130, 1225+interval*2+tInt2*2);

  text("Reduction in meat consumption and industrial farming would improve", 130, 1225+interval*3);
  text("high-density conditions in meat production facilities where many infectious", 130, 1225+interval*3+tInt2);
  text("diseases can originate; therefore, would reduce the risks of another pandemic.", 130, 1225+interval*3+tInt2*2);

  text("Less meat consumption means less animal slaughters. There is no", 130, 1225+interval*4);
  text("such thing as humane slaughter.", 130, 1225+interval*4+tInt2);

  pop();
}

function section3() { //subtitle 3
  let slider;
  let tInt3 = 27;
  ctx.fillStyle = grad2;
  noStroke();
  rect(0, 1840, 800, 700)

  fill(255)
  text("Be part of the solution and", 170, 1912);
  text("make our earth a better place to live", 90, 1912+subIn);
  textFont(fontM);
  textSize(22);
  text("Choosing to replace the meat on our plates with planet-based", 98, 2017);
  text("protein and reducing animal-based foods will protect the", 122, 2017+tInt3);
  text("planet and have a positive impact on human health.", 147, 2017+tInt3*2);

  image (earth, 250, 2115);

  fill("yellow");
  rect(120, 2410, 150, 40, 10);
  rect(530, 2410, 150, 40, 10);

  fill(0);
  textFont(fontR);
  textSize(20);
  text("eat more meat", 130, 2435);
  text("eat less meat", 545, 2435);
}
