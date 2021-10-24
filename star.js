class Star {

  constructor(_position) {
    this.color = 0;
     this.size = 2;
     this.position = _position;
     this.vector = createVector(
       this.position.x - width / 2,
       this.position.y - height / 2
     );
     this.direction = this.vector.copy().normalize();
  }

  // move() {
  //   this.z = this.z - speed;
  //   if (this.z < 1) {
  //     this.z = width;
  //     this.x = random(-width, width);
  //     this.y = random(-height, height);
  //     this.pz = this.z;
  //   }
  // }

  show() {
    noStroke();
       fill(map(this.color,0,100,0,255));
// fill(255, 228, 105, map(this.a,0,255,0,255));
       this.direction.mult(random(1.07, 1.10));
       this.position.add(this.direction);
       this.position.add(viewPoint);

       ellipse(this.position.x, this.position.y, this.size);

       this.size += 0.05;

       if(this.color <= 100) {
         this.color += 3;
       }
     }

offscreen(){
  return this.position.x < 0 || this.position.y < 0 ||
  this.position.x > width || this.position.y > height;

}

}
