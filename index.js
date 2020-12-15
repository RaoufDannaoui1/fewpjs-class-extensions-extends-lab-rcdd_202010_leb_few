// Your code here
class Polygon {
  constructor(array) {
    this.array=array;
  }

  get countSides(){
    return this.array.length;
  }

  get perimeter(){
    for (var int of this.sides) {
      sum += int
    }
    return sum
  }
}