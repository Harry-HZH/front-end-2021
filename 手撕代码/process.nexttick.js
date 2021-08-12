console.log('script start')

async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end')
  return Promise.resolve()
}
async1()


setTimeout(function () {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function () {
    console.log('promise1')
    process.nextTick(fn => {
      console.log('nexttick2')
    })

  })
  .then(function () {
    console.log('promise2')
  })
  .then(function () {
    console.log('promise3')
  })


process.nextTick(fn => {
  console.log('nexttick1')
  process.nextTick(fn => {
    console.log('nexttick2')
    new Promise(resolve => {
      console.log('Promise123123')
      resolve()
    })
      .then(function () {
        console.log('promise1123123')
        process.nextTick(fn => {
          console.log('nexttick2123123123')
        })
      })
  })
})

console.log('script end')

