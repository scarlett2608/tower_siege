class Launcher {
   constructor(bodyA,pointB){

    
    var options = {
        length:20,
        stiffness:0.009,
        bodyA:bodyA,
        pointB:pointB
      }
      
      this.bodyA = bodyA;
      this.pointB = pointB;

    this.sling = Constraint.create(options);
      World.add(world,this.sling);

   }
   
   fly(){
    this.sling.bodyA = null;
   }



   display(){
    
     
    if (this.sling.bodyA) {
      var posA = this.bodyA.position;
      var posB = this.pointB;
      stroke('black');
      strokeWeight(3);
      line(posA.x,posA.y,posB.x,posB.y);
    }

    }
  }
  

