function setup() {
  // write your codes here
new Canvas (900,400)
background("limegreen")
// python print
console.log("Hello i am here");

let a =5;
let b =10;

let sum= a+b;
textSize(40);
text("Hello:"+sum ,150,150);



  // --- Exercise: Area of Triangle ---
  // write your codes here
//   let width= 200;
//   let height= 150;
//   let area= 1/2 *width*height;

//   text("area of triangle:" +area,150,180);

//   console.log("Area of Triangle =",area)


//   // --- Exercise: Sum of first 10 even numbers ---
//   // write your codes here
// // i=i+(1)=i++(plus 1) if 2 or above then 1+=(num)vise versa minus
//   let sum1 =0
// for (let i=2 ; i<21; i=i+2){
// console.log("Counting..."+i );
// sum1=sum1+i;
// }
// console.log(sum1)
// console.log("stopped the loop");

  // --- Exercise: Age category classification ---
  // write your codes here
// let age= 
// if(age<=6){
//   console.log("Kindergarten");
// }
// else if (age<=9){
//   console.log("Lower Primary");
// }
// else if (age<=12){
//   console.log("Upper Primary");
// }
// else{
//   console.log("Secondary");
// }
  // --- Exercise: Display odd numbers backward using while loop ---
  // write your codes here
// let num=19
// while(num>0){
//   console.log(num);
//   num-=2;
// }
  // --- Exercise: Array operations (groceries) ---
  // write your codes here
let zoo = [];
zoo[0]="Monkey";
zoo.push("Sebastian");// join the queue at the end of the list
zoo.push("Flamingo");
console.log(zoo);
console.log("How many animals?",zoo.length);

zoo.push("Goat")
for (let i =0; i<zoo.length;i++){
  console.log(zoo[i])
}
let groceries=["apple","bread", "milk"];
groceries.push("orange");
groceries.push("butter");
groceries[1]="kaya";
groceries.shift(0);
console.log(groceries);

textSize(40);

let y = 180;
for(let item of groceries){
  text("Groceries: "+item ,150,y);
  y=y+45;
}





} // this is the function setup bracket



function draw(){

}
