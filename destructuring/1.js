const mock = {k1: "v1", k2: "v2"}

const MockFunc = (e) => {
  const val1 = { ...e }
  const val2 = { test: e}
  const val3 = { e }
  const val4 = e
  console.log(this.val1, this.val2, this.val3, this.val4)
  return {
    val1,
    val2,
    val3,
    val4,
  }
}

console.log("MockFunc(mock)", MockFunc(mock))
// { k1: 'v1', k2: 'v2' } { test: { k1: 'v1', k2: 'v2' } } { e: { k1: 'v1', k2: 'v2' } } { k1: 'v1', k2: 'v2' }

class MockClass {
  constructor(e) {
    this.val1 = { ...e }
    this.val2 = { test: e }
    this.val3 = { e }
    this.val4 = e
    // console.log(this.val1, this.val2, this.val3, this.val4)
  }
}

const m2 = new MockClass(mock)
console.log("m2", m2)
// m2 MockClass {
//   val1: { k1: 'v1', k2: 'v2' },
//   val2: { test: { k1: 'v1', k2: 'v2' } },
//   val3: { e: { k1: 'v1', k2: 'v2' } },
//   val4: { k1: 'v1', k2: 'v2' }
// }

console.log("m1.val4 === m2.val4", MockFunc(mock).val1 === m2.val1) // false
console.log("m1.val4 === m2.val4", MockFunc(mock).val2 === m2.val2) // false
console.log("m1.val4 === m2.val4", MockFunc(mock).val3 === m2.val3) // false
console.log("m1.val4 === m2.val4", MockFunc(mock).val4 === m2.val4) // true