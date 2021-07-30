Function.prototype.myBind = function(target){
    let self = this 

    let args = Array.prototype.slice.call(arguments,1)

    let fNOP = function(){}

    const fBound = function() {
        let bindArgs = Array.prototype.slice.call(arguments)
        return self.apply(this instanceof fNOP ? this:target,args.concat(bindArgs))
    }
    fNOP.prototype = self.prototype
    fBound.prototype = new fNOP()
    return fBound

}

var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'kevin';
4
var bindFoo = bar.myBind(foo, 'daisy');

var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin