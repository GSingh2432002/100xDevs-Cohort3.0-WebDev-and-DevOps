class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }
    area(){
        const area = this.radius * this.radius * Math.PI;
        return area;
    }
    paint(){
        console.log("Painting with color " + this.color);        
    }
}
const circle = new Circle(2,"red");
const area = circle.area();
console.log(area);
