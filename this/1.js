'use strict'

const f1 = () => {
  console.log(this)
}

f1() // {}
f1.call({ttt: 1}) // {}

function f2() {
  console.log(this)
}

f2() // undefined
f2.call({ttt: 1}) // { ttt: 1 }

function test() {
  console.log(this)
}

// for browser
// window.test.call(window)

