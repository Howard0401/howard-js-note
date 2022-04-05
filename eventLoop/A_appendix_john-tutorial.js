
// author: https://github.com/JohnKeng
// 括號就是表達式
// 後面括號 是 前面括號 的參數
( x => x + 1 ) (3) // 4
( x => x * x) ( ( x => x + 1 ) (3) ) // 16
( x => x + 10 )( (x => x * x) ( ( x => x + 1 ) (3) ) ) // 26


// 函數可以當參數輸入
( (x, f) => f(x) )( 3, x => x * x) // 9
// 等同於
const a = ( (x, f) => f(x) )
a(3, x => x * x)

// 輸入兩個函數參數，輸出一個函數
const fn = (g, f) => (x => f(g(x))) 
fn(x => x * x, x => x + 6)(5) // 31


// 輸入三個函數參數，輸出一個函數
const fn2 = (f, g, k) => (x => k(g(f(x)))) 
fn2(x => x -9 , x => x * x, x => x + 6)(5) //22

// 輸入 n 個函數參數，輸出一個函數
const fn3 = (...fns) => x => fns.reduce((y, f)=> f(y), x)
fn3(x => x -9 , x => x * x, x => x + 6)(10) //7