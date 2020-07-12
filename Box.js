class Block{
    constructor(x,y,width,height,colour){
        var options = {
            restitution:0,
            friction:3.0,
            density:1.0
            
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.colour = colour;
        this.Visibility = 255;
        World.add(world,this.body);
     
    }
    display(){
        
        


        if (this.body.speed < 3) {
            var angle = this.body.angle;
            //making changes in settings
            push();
            //calling the x and y
            translate(this.body.position.x,this.body.position.y);
            //setting the angle
            rotate(angle);
            rectMode(CENTER);
            fill(this.colour);
            strokeWeight(0);
            rect(0,0,this.width,this.height);
            //setting the default settings back
            pop();
        }
        
        else{   
            World.remove(world,this.body);
            push();
            this.Visibility = this.Visibility - 3;
            tint(255,this.Visibility);
            pop();
        }
        
            
            
    }
}