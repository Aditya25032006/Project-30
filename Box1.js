class Box1{
    constructor(x,y,width,height){
        var options={
            'restitution':0.04,
            'isStatic':false,
            'friction':3
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
       
        this.visibility = 255;
        World.add(world,this.body);
       
    }

    display(){
        
        if(this.body.speed < 3){
            
        var pos =this.body.position;
        rectMode(CENTER);
        fill("lightgreen");
        rect(pos.x, pos.y, this.width, this.height);
        
        

        }
        else{
          World.remove(world,this.body);
          push();
          this.visibility = this.visibility-10;
          tint(255,this.visibility);
         //image(this.image, this.body.position.x,this.body.position.y, 50, 50);
          pop();
        }
    }
}