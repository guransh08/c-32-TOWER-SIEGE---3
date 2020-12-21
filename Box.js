class Box{
  constructor(x, y, width, height) {
      var options = {
         
        'restitution': 0.8,
        'friction':3.5,
        'density':2.5,
        //'isStatic':true
         
      }
      this.visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
    }

   
   
    display(){
      console.log(this.body.speed);
      if(this.body.speed <7.9){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility -5;
      pop();
      
    
    

}
    
    
  }
  score(){
    if(this.visibility<0 && this.visibility>-10){
      score++;
    }
  }
}
