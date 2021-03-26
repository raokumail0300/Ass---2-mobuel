//                Q1




let obj_1 = {
  color1: "red",
  color2: "blue",
  color3: "yellow"
  
};


let obj_2 = {
    Name: "Saad",
    rollNo: 5,
    phoneNo: 546213614
 
};


let obj_3 = Object.assign({},obj_1,obj_2);
console.log(obj_3);

obj_3.rollNo = 20;
console.log(obj_3);

//          Q2




let a1 = 2;
let color = a1 == 1 ? "Blue" : a1 == 2 ? "Green" : "black";
console.log(color);





//             Q3

let arr1 = [1,2,3,4,5,6,7,8,9,10];
for (value in arr1) {
    console.log(value);
}



let a = [1,2,3,4,5];
let b = 0;


for (c of a) {
    b += c;
}
console.log(b);






//         Q4

let arrow = () => {
    console.log("Hello World");
};
arrow();