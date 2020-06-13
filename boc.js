var options ={
            restitution: 1.0
        }
     this.body = Bodies.rectangle(x,y,width,height,options);
 this.width=width;
 this.height=height;
 World.add(world,this.body);
display()
   {  
var pos=this.body.position;
   fill("white");
   rectMode(CENTER);
   rect(pos.x,pos.y,this.width,this.height);
 var angle=this.body.angle;
 angleMode(RADIANS);
 push();
 translate(pos.x,pos.y);
 rotate(angle);
 rectMode(CENTER);
 rect(0,0, this.width,this.height);
 pop();
display() 
{
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
    
        super.display();
      }
    
}