console.log(__filename)
console.log(__dirname)

var n = 0
let interval = setInterval(() => {
    console.log('Hello')
    n = n + 1
    if(n == 10){
        clearInterval(interval)
    }
}, 1000);



setTimeout(() => {
    console.log('Timeout')
}, 5000);

console.log('---- END ----')