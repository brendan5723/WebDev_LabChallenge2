let sample = "Today is Thursday";

let message = (`______${sample.toUpperCase()}______`);

console.log(message);

console.log(`what type is the sample variable: ${typeof sample}`);


let obj = {
    name : "John",
    age : 50
}

console.log(typeof obj);

for (let key in obj) {
    console.log(obj[key]);
}