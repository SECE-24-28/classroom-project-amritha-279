/*console.log(a);
var a =10;

console.log(a);

let b=20;
b=13;
console.log(b);

const c=30;
console.log(c);

*/
//-----
function namefunc(){
    console.log("name function called");
    console.log("name function called");
    console.log("name function called");
}
namefunc();

const addTwono = (num1, num2) => {
    console.log(num1, num2);

    let n1 = num1 || 10;
    let n2 = num2 || 20;
    let sum = n1 + n2;
    console.log("The sum of the numbers are", sum);
};

addTwono(20, 50);
addTwono(20, 30);
addTwono();

//-----

let a = 10;
let b =20;
console.log(a+b);

const fruits = ["Apple", "Banana", "Mango"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let arr = [1, 2, 3, 4, 5];

arr.forEach((element, index) => {
    console.log(element, index);
});


//-----

let e = 10;
let f = "2";
console.log(2 === "2");

let c = [1, 2, 3, "aaa"];
let d = [1, 2, 3, "aaa"];
console.log(c[0]===d[0]);

let arr2 = [1, 2, 3, 4, 5];

//for loop
for (let i = 0;i<arr.length;i++){
    arr[i] = arr[i] + 1;
}
console.log(arr);

let arr1 = [1, 2, 3, 4, 5];
//for each
arr1.foreach((element, index) => {
    console.log(element, index);
});

let arr3 = [1, 2, 3, 4, 5];
    let aa=arr.map((el,ind)=>{
        return el+ind;
});

let a1 = arr.map((el, ind) => +ind);
console.log(arr2);
console.log(aa);


//-----


let h = [1,2,3,4,5,6,7,8,9];

let g = h.filter((el,ind)=>{
    return el%2==0;
});
console.log(g);

//------

let j = arr.filter((el)=>{
    return el.if

});






