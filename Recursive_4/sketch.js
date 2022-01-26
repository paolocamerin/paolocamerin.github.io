let can; 

let tree = [];
function setup(){
can = createCanvas(500,500);
t = new rectangle(0,0,width,height,4);

}

function draw(){
print(tree.length);

for(let b of tree){
  if(b.bottomLevel){
    b.display();
  }
}
}

class rectangle{
  constructor(x,y,w,h,d){
   this.x = x;
    this.y = y;
    this.w = w; 
    this.h = h; 
    this.d = d;
    this.bottomLevel = false; 

    if(this.d>1){
     this.divide();
     
    }else{
      this.bottomLevel = true; 
    }
  
  }

  divide(){

    this.d -= 1; 
    if(this.d%2 == 0){
      tree.push(new rectangle(this.x,this.y,this.w/2,this.h,this.d));
      tree.push(new rectangle(this.x+this.w/2,this.y,this.w/2,this.h,this.d));
    }else{
      tree.push(new rectangle(this.x,this.y,this.w,this.h/2,this.d));
      tree.push(new rectangle(this.x,this.y+this.h/2,this.w,this.h/2,this.d));
    }
   
  }

 

  display(){

    noFill();
    stroke(21);
    strokeWeight(1)
    rect(this.x,this.y,this.w,this.h);
    
  }


}