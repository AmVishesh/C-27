class Chained {
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.04,
        }
        this.Constraint=Matter.Constraint.create(options)
        World.add(world,this.Constraint)
    }
    display(){
        var pointA=this.Constraint.bodyA.position
        var pointB=this.Constraint.bodyB.position
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        
    }
}