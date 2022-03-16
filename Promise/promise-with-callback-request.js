function f1(ctx, ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(`ctx=${ctx},f1`);
    }, ms);
  });
}

function f2(ctx, ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(`ctx=${ctx},f2`);
    }, ms);
  });
}

const UI = () => {
  onClickXXX((r1, r2) => {
    console.log(r1, r2)
  })
}

const onClickXXX = (res) =>  {
  try {
     f1("ctx1",1000).then((r_f1) => {
      f2("ctx2",2000).then((r_f2) => {
        res({
          r_f1, r_f2
        })
      })
    })
  } catch(error) {
    console.error("onClickXXX")
  }
}

UI()