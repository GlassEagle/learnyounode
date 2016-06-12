var arg = process.argv.slice(2);

var sum = arg.reduce(function(previousValue, currentValue){
    return previousValue + Number(currentValue);
}, 0);

console.log(sum);