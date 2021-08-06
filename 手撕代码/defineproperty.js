//Object.defineProperty对我们正常的操作进行拦截，然后执行里面我们自己定义的操作

let obj = {a:'我叫马牛逼'}

Object.defineProperty(obj,'a',{
  get(){
    console.log(a);
  },
  set(value){
    a = value + '----我是小尾巴'
  }
})
obj.a = '我是春哥'
console.log(obj.a)

