class Block{
    constructor(x, y, width, height){
        this.width = width;
        this.height = height;

        var options = {
            restitution: 0.2,
            friction: 1,
            density: 0.05
        }

        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("red");
        stroke("green");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        

    }
}