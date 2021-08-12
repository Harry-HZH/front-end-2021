function fn() {
  setTimeout(() => {
    console.log('go')
  }, 1)

  setTimeout(() => {
    console.log('on')
  }, 0)

  setTimeout(() => {
    console.log('on1')
  }, 10)
  setTimeout(() => {
    console.log('on2')
  }, 4)
}
for(let i = 0;i<10000;i++){
  console.log(1000);
}
fn()