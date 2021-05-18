class Paper  {
    constructor(x,y)   {
        var options = {
            isStatic: false,
            restitution: 0.3,
            density: 1.2,
            friction: 0.5,
        }
        this.body = Bodies.circle(150, 600 , 22 ,options);
    
        this.image = loadImage('paper.png');
        World.add(world,this.body);

    }
display()  
    {
            push();
            var PaperPos = this.body.position;
            translate(PaperPos.x , PaperPos.y);
            imageMode(CENTER);
            image(this.image,0,0,100,100);
            pop();
        }

}
