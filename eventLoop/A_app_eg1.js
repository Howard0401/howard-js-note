const f1 = x => x + x
const f2 = x => x + 6
const f3 = x => x - 10

const loop2 = (n, ...arr) =>  {
  let box = n
  arr.forEach(fn => {
    box = fn(box)
  })
  return box
} 
console.log("loop2(500, f1, f2, f3)=",loop2(500, f1, f2, f3))

const reduceFunc = (...fns) => x => fns.reduce((y, f)=> f(y), x)
console.log("reduceFunc(f1, f2, f3)(500)", reduceFunc(f1, f2, f3)(500))