setImmediate(() => {
  console.log('im');
})
for(let i = 0;i<10000;i++){
  console.log(i)
}

setTimeout(() => {
  console.log('stout');
}, 1000);