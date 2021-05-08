class Dustbin{
    constructor(x,y,options){
        options = {
		isStatic: true,
	  };

      this.image=loadImage("dustbin.png");
      
    dustbin = Bodies.circle(width/2 , 200 , 5 ,
         {restitution:0.1, isStatic:true});
    World.add(world, dustbin);

     var LeftBox = createSprite(850, 600, 10, 150);
     LeftBox.shapeColor = color("white");
     var LeftBody = Bodies.rectangle(810, 600, 20, 100, options);
     World.add(world, LeftBody);

     var RightBox = createSprite(965, 600, 20, 150);
     RightBox.shapeColor = color("white");
     var RightBody = Bodies.rectangle(990, 600, 20, 100, options);
     World.add(world, RightBody);

     var CenterBox = createSprite(910, 600, 200, 20);
     CenterBox.shapeColor = color("white");
     CenterBox.addImage(this.image);
     CenterBox.scale = 0.5;
     var CenterBody = Bodies.rectangle(900, 600, 200, 20, options);
     World.add(world, CenterBody);
    
    

    }


}