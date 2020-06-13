this.body.position.x = mouseX;
this.body.position.y = mouseY;

 Matter.Body.setAngle(this.body, angle);

strokeWeight(3);
stroke("blue")


display()
{
       var pos=this.body.position;
       fill("white");
       imageMode(CENTER);
       image(this.image,pos.x,pos.y,this.width,this.height);
    
    
     super(x,y,50,50);
    class Bird extends BaseClass {
  constructor(x,y){
super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
class Log extends BaseClass{
      constructor(x,y,height,angle){
        super(x,y,20,height,angle);
        this.image = loadImage("sprites/wood2.png");
        Matter.Body.setAngle(this.body, angle);
      }
    }
    super.display();
  }
}

}