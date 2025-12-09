/*setTimeout(() => {
    console.log("SetTimeout executed");
}, 0); //callback function & timer

console.log("Printing hello world");

// callback hell - nested callbacks
setTimeout(() => {
    console.log("First callback");

    setTimeout(() => {
        console.log
        ("Second callback");

        setTimeout(() => {
            console.log("Third callback");

            setTimeout(() => {
                console.log("Fourth callback");

                setTimeout(() => {
                    console.log("Fifth callback");
                }, 1000);

            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);*/

//Promises
//3 States
//pending
//fulfilled
//rejected

//promise pass a callback function with two parameter
let myPromise=new Promise((res,rej)=>{
    let marks=40;
    if(marks>60){
        res("Student is passed");
    }else{
        rej("Student is failed");
    }
});

//ways to call a promise
//.then() and .catch()
mypromise
.then((a)=>{
    console.log(a);
})
.catch((err)=>{
    console.log(err);
});

//Async and await
//no error handling

let handlePromise=async ()=>{
    try{
        console.log("Test");

        let response =await myPromise;
        console.log(response);
        console.log("Anything");
    }catch(err){
        console.log(err);
    }finally{
        console.log("This will execute ")
    }
};

handlePromise();
