class Ball{
    constructor(x, y, width, height){
        this.width = width;
        this.height = height;
        var options = {
            frictionAir: 0.004,
            density: 1
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(this.body, world);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rect(0,0, this.width, this.height);
        pop();
    }
}