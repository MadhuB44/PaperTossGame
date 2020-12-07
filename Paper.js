class Paper {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':0.4,
        'friction':0.5,
        'density':1.16
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
      this.image =loadImage("paperr.png")
      World.add(world, this.body);
      }
    display(){
      ellipseMode(RADIUS);
  
      fill("white");
      stroke("lightblue")
      imageMode(CENTER);
      image(this.image,this.body.position.x, this.body.position.y,59,59);
      
    }
    };