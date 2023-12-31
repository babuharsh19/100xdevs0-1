// console.log("Hello world!");
// console.log("a");
let a = 1;
a=2;
let fname = "harsh";
let number = 17;
let single = true;
// console.log(a);
// console.log(fname);
// console.log(number);
// console.log(single);
if(number<18){
    // console.log("single");
}
else{
    // console.log("not single");
}
let temp = 0;
for(let i=0; i<=1000; i++){
    temp += i;
}
// console.log(temp);

// ******************************
// Array
const temp1 = [1,2,3,4,'harsh','aman']
console.log(temp1);
console.log(temp1[5]);
console.log(temp1[1]);

for(let i=0; i<temp1.length; i++){
    if(temp1[i]%2 == 0){
        console.log(temp1[i]);
    }
}

// ******************************
// Objects
const persons = ['harsh','aman', 'mohit','rohit',];
const gender = ['male','female','male','female'];

const user1 = {
    fname : "harsh",
    gender : "male"
}

const personall = [{
    fname : "harsh",
    gender : "male"
},{
    fname : "sr",
    gender : "female"
},{
    fname : "aman",
    gender : "male"
}]
console.log(personall);
// console.log(user1.gender);

for(let i=0; i<personall.length; i++){
    if(personall[i]["gender"]=='male'){
        console.log(personall[i]["fname"])
    }
}

// *****************************
// functions

// function sum(a,b, fntocall){
//     const res = a+b;
//     fntocall(res);
// }
// let val = sum(1,2);
// let sum = 0;
// for(let i=0; i<10000000000000;i++){
//     sum += i;
// }
// console.log(val);

// ********************************
// Function callback

function printres(data){
    console.log("Sum of two numbers is : "+ data);
}

// sum(2,9, printres);

function calculator(a, b, operation){
    const ans = operation(a,b);
    return ans;
}
function sum(a,b){
    return a+b;
}
const value = calculator(3,6,sum);
console.log(value);

// ***************************************
const now = new Date();
console.log(now.toISOString());
// setTimeout(() => {
//     const now1 = new Date();
//     console.log(now1.toISOString());
// }, 6*1000);
const now2 = new Date();
// console.log(now2.toISOString());
let counter = 10;
// let cnt = setInterval(() => {
//     console.log(counter);
//     counter--;
//     if(counter==-1)clearInterval(cnt);
// }, 1*1000);

const now3 = new Date();
// console.log(now3.toLocaleTimeString());
const endtime = new Date();
endtime.setHours(10);
endtime.setMinutes(1);
// const timer = setInterval(() => {
//     const timenow = new Date();
//     console.log(timenow.toLocaleTimeString());
//     if(timenow.getHours()>=endtime.getHours()&&timenow.getMinutes()>endtime.getMinutes())clearInterval(timer);
// }, 1*1000);

obj = {}
obj.name1 = 'harsh';
obj.age += 10;
console.log(Object.keys(obj));
res = []
for(categorys in Object.keys(obj)){
    res.push( {
      category: obj.categorys,
      totalSpent: obj.category
    })
}
console.log(res)
for(c in res){
    console.log(c)
}
console.log('name1' in obj)
x = 'jj'
obj.x = 'babu';
console.log(obj)
obj[x] = 'man'
obj["y"] = 'hb'
console.log(obj)
z = 'Able, was I ere I saw Elba!'
z=z.replaceAll(' ', '');
specialChar = ['!','?', ',']
if(z[z.length-1] in specialChar){
z = z.replace(z[z.length - 1],'')
}
console.log(z[z.length - 1]);
console.log(z);