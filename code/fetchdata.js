/*let fetchData= () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => {
        console.log("value is", data);
    })
    .catch((err) => {
        console.log(err);

    });
};
*/

let fetchData = async () => {
    try {

    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    console.log(response);
   // convert the output into json format we use the below line
    const data = await response.json();
    console.log("value is",data);
    } catch (err) {
   console.log(err);
    }
};
fetchData();
