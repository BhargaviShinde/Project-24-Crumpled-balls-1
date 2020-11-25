
  class Dustbin{
    constructor(x,y){
        var options={
            'isStatic' : true
        }

        this.body = Bodies.rectangle(x,y,180,10,options);
        this.y = y;
        this.x = x;
        World.add(world, this.body);

        this.body = Bodies.rectangle(690,600,7,100,options);
        World.add(world, this.body);

        this.body = Bodies.rectangle(850,600,7,100,options);
        World.add(world, this.body);
    }

    display(){
         
      var pos = this.body.position;
        rectMode(CENTER);
        push();
        translate(pos.x, pos.y);
        fill("yellow");
        pop();
    }
}
