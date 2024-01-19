function arithmetic(a,b, fun){
    var x=fun(a,b);
    return x;
}
function sum(a,b){
    return a+b;
}

var val=arithmetic(1,5,sum);
console.log(val)