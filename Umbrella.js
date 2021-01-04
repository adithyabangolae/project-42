class Umbrella {

    constructor(x,y) {


        var options={
            isStatic:true,
            
            
		
        }
        this.x=x;
		this.y=y;
        this.r=50;
        this.body=Bodies.circle(this.x, this.y,50,options)
        this.image=loadImage("images/Walking Frame/walking_1.png");
		World.add(world, this.body);


    }

    display() {
        var pos=this.body.position;

        
        //translate(pos.x,pos.y)
        imageMode(CENTER)
        //ellipseMode(CENTER)
        image(this.image,pos.x,pos.y,300,300)
        
       
    }


}