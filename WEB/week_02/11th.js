class Rectangle {
    constructor(width, height, color) {
         this.width = width;
         this.height = height;
         this.color = color; 
    }
    
    area() {
        console.log(this);

        const area = this.width * this.height;        
          return area;
    }
    
    paint() {
             console.log(`Painting with color ${this.color}`);
    }
    
    destroy(){
    }
 }
 
 const rect =  new Rectangle(2, 4, "red")
 const area = rect.area();
 console.log(area)
 rect.paint();
 rect.destroy();

 const rect1 = new Rectangle(4, 4, "red")
 const area1 = rect1.area();
 console.log(area1)


 const now = new Date();
 console.log(now); 
 

 