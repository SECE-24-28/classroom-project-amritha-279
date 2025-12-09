
function createArray(a, b, c) {
    return [a, b, c];
}

console.log(createArray(1, 2, 3));


function stringOnly(...args) {
    let result = [];

    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === "string") {
            result.push(args[i]);
        }
    }

    return result;
}

console.log(stringOnly(1, "apple", true, "hello", 50, "js"));



function square(a,b,c){
    return[a*a,b*b,c*c];
}
console.log(square(2,3,4));



































