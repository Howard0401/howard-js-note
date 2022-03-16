function run(...arr) {
  let change = arr.pop()
  let cb = arr.pop()
  // console.log("run change=",change.toString())
  // console.log("run cb=",cb.toString())
  do {
    let a = change
    let b = cb
    console.log("change a=",a.toString())
    console.log("cb b=",b.toString())
    change = (ctx) => {
      b(a, ctx)
    }
    // console.log("assigned change=",change.toString())
  } while(cb = arr.pop())
  return change
}

const go = run (
  function f1(change,  queue) {
    console.log(1)
    queue = change(queue)
    console.log(10)
  },
  function f2(change,  queue) {
    console.log(2)
    queue = change(queue)
    console.log(20)
  },
  function f3(change,  queue) {
    console.log(3)
    queue = change(queue)
    console.log(30)
  },
  function f4() {
    console.log(4)
  },
)

go()


function f1() {
  console.log(1)
  function f2() {
    console.log(2)
    function f3() {
      console.log(3)
      function f4() {
        console.log(4)
      }
      f4()
      console.log(30)
    }
    f3()
    console.log(20)
  }
  f2()
  console.log(10)
}

// f1()