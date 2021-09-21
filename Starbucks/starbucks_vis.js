let star_table;
let states = [];
let cities = [];

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  star_table = loadTable('/assets/starbucks.csv', 'csv', 'header');
  //the file can be remote
  //table = loadTable("http://p5js.org/reference/assets/mammals.csv",
  //                  "csv", "header");
}

function setup(){
createCanvas(300,300);
print(star_table.getRowCount() + ' total rows in table');
print(star_table.getColumnCount() + ' total columns in table');
let prevStr;
for(let r = 0; r < star_table.getRowCount();r++){
//for(let c = 0; c < table.getColumnCount();c++){
    const str = star_table.getString(r, 7);
    if (str!=prevStr){
        states.push(str);
        prevStr = str;
    }
   


//}
}


for(let r = 0; r < star_table.getRowCount();r++){
//for(let c = 0; c < table.getColumnCount();c++){
    const str = star_table.getString(r, 5);
    if (str!=prevStr){
        cities.push(str);
        prevStr = str;
    }
   


//}
}

print(states.length);
print(states);

print(cities.length);
print(cities);

}

function draw(){


}