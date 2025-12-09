let a={
    name:"Amrit",
    b:20,
};

console.log(this);
var funf=function(aa,jk){
    console.log(this.name,aa,jk);
};
//funf(300);

//call apply bind
//bind
let boundedfn=funf.bind(a, 500,"kl");
boundedfn();
//return a function

//call
funf.call(a, 400,900);
//it will immediately and the arguments we want to pass

//apply
funf.apply(a, [400,900]);
