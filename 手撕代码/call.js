
Function.prototype.myCall = function(target, ...args){
    target = target || window;
    target.fn = this
    let result = target.fn(...args)
    return result
};

let obj = { name: 123 }
function foo(...args) {
  console.log(this.name, args)
}
let s = foo.myCall(obj, '111', '222')