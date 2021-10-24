// let stars = [];
let viewPoint;

let bgSound;
let clickSound;
let tunnelSound;

let playbackRate = 1;
let fr = 30;

// function preload() {
//   bgSound = loadSound("space_audio.mp3");
//   clickSound = loadSound("space_whoosh.mp3");
//   tunnelSound = loadSound("space_tunnel.mp3");
// }

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
cnv.parent("#canvasDiv");
// tunnelSound.playMode("untilDone");

  // for (let i = 0; i < 800; i++) {
  //   stars[i] = new Star();
  // }

  frameRate(20);
  colorMode(RGB, 255, 255, 255, 255);
  resetStars();
  // bgSound.loop();

}

function draw() {

  // speed = map(mouseX, 0, width, 0, 50);
  // speed = 20;

  background(5, 5, 20, 200);

  // translate(width/2, height/2);


  // if (mouseIsPressed) {
  //   setViewPoint(mouseX - width / 2, mouseY - height / 2);
  //   for (let i = 0; i < 15; i++) {
  //     let star = new Star(galaxyMousePressed());
  //     stars.push(star);
  //   }
  //   tunnelSound.play();
  //   tunnelSound.rate(playbackRate);
  //   playbackRate += 0.001;
  //   fr += 0.1;
  //   frameRate(fr);
  //   bgSound.setVolume(0.2);
  //
  // } else {
  //   setViewPoint(0, 0);
  //   frameRate(30);
  //   bgSound.setVolume(1);
  //   tunnelSound.rate(1);
  //   tunnelSound.stop();
  // }


  for (let i = 0; i < 5; i++) {
    let star = new Star(galaxy());
    stars.push(star);
  }


  for (let i = 0; i < stars.length; i++) {
    const star = stars[i];
    if (star.offscreen()) {
      stars.splice(i, 1);
    } else {
      star.show();
    }
  }

  // for (let i = 0; i < stars.length; i++) {
  //   stars[i].move();
  //   stars[i].show();
  // }

}

function setViewPoint(x, y) {
  viewPoint = createVector(
    map(x, 0, width, 0, 15),
    map(y, 0, height, 0, 15)
  );
}


function galaxy() {
  return createVector(random(0, width), random(0, height));
}

function galaxyMousePressed() {
  let radius = 20;
  let angle = random(180);

  let x = width / 2 + radius * cos(angle);
  let y = height / 2 + radius * sin(angle);

  // let x = width/2 +  cos(radians(angle+radius/2)/2);
  // let y = height/2 + sin(radians(angle-radius/2)/2);

  return createVector(x, y);
}

function resetStars() {
  stars = [];
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  resetStars();
}

function mouseClicked() {
  clickSound.play();
  clickSound.setVolume(0.2);
}
