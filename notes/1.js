// Object.getOwnPropertyDescriptors()

var a = 1 // var assign to "Global" VO(Variable Object), mapping to window GO(Global Object)
b = 1  // assign 
const test1 = Object.getOwnPropertyDescriptors(window, 'a')
const test2 = Object.getOwnPropertyDescriptors(window, 'b')
// undefined: {value: undefined, writable: false, enumerable: false, configurable: false}
delete a  // false
// window.a  // 1 
delete b // true
//window.b  // undefined

// https://stackoverflow.com/questions/6349232/whats-the-difference-between-a-global-var-and-a-window-variable-in-javascript


// memory type
// type   //of 
/// 0000  //object
//  1     //int
//  010   //double
//  100   //string
//  110   //boolean


// JSON string 是 100
// var a = b = 1
// equal to below 
// b = 1
// return 1
// a = function() { return 1 }