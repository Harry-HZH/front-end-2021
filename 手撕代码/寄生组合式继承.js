function Person(name) {
  this.name = name
  this.color = ['white','yellow','black']
}

Person.prototype.sayName = function () {
  console.log(this.name)
}

function Chinese(name){
  Person.call(this,name)
  this.color = 'yellow'
}

let fn = function(){}
fn.prototype = Person.prototype
Chinese.prototype = new fn()

let hezhihao = new Chinese('hzh')
hezhihao.sayName()