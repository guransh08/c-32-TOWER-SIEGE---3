class Polygon  {
    constructor(x,y,width,height)  {
        var options={
                'isStatic':false,
                'density':1.5,
                ' restitution':0.5,
                'friction':1
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.image = loadImage("polygon.png")

        World.add(world,this.body)

    }
    display()  {
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)

    }
}
