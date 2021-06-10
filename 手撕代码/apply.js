Function.prototype.myApply = function(target){
    target = target || window
    target.fn = this 
    console.log(arguments);
    let args = arguments[1]
    let result = target.fn(args)
    return result
}

const obj = { name: 123 };
function foo(args) {
  console.log(this.name, args);
}
foo.prototype.name = 12345;
const s1 = [1, 2, 3, 4, 5];
const s = foo.myApply(obj,s1);