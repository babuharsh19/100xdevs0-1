/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    const startTime = new Date();
    let sum = 0;
    for (let i = 1; i <=n; i++) {
        sum += i;
    }
    const endtime = new Date();
    console.log(startTime);
    console.log(endtime);
    return (endtime.getTime() - startTime.getTime())/1000;
}
let time1 = calculateTime(100)
console.log(time1);
let time2 = calculateTime(100000)
console.log(time2);
let time3 = calculateTime(10000000000)
console.log(time3);