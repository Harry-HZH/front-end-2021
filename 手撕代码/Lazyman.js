function lazyman(name) {
  class Lazyman {
    constructor(name) {
      this.name = name
      this.tasks = []
      setTimeout(() => {
        this.next()
      }, 0);
    }
    next() {
      let fn = this.tasks.shift()
      typeof fn=='function' && fn();
    }
    eat(food) {
      let fn = () => {
        console.log(`i'm ${this.name}、eat、${food}`)
        this.next()
      }
      this.tasks.push(fn)
      return this
    }
    sleep(time) {
      let fn = () => {
        setTimeout(() => {
          this.next()
        }, time * 1000);
      }
      this.tasks.push(fn)
      return this
    }
    sleepFirst(time) {
      let fn = () => {
        setTimeout(() => {
          this.next()
        }, time * 1000);
      }
      this.tasks.unshift(fn)
      return this
    }
  }

  return new Lazyman(name)
}
lazyman('Jack').eat('lunch').sleep(2).eat('dinner').sleepFirst(5)

