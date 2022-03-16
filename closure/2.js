function f1() {
  let n = 999
  nAdd = function() {
    n += 1
  }
  return function f2() {
    console.log(n)
  }
}

let result = f1()

result()
nAdd()
result()