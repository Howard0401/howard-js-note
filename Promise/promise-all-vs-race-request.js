const sleep = async(ms) => {
  return new Promise(resolve =>{
    setTimeout(() => { resolve() }, ms);
  })
}

const f1 = async(ctx, ms) =>  {
  await sleep(ms)
  const api = 'res1'
  str += 'f1()'
  return 'f1() api=' + api + ',' + 'ctx=' + ctx
  // return new Promise(resolve => {
  //     str += 'f1()'
  //     resolve('f1() api=' + api + ',' + 'ctx=' + ctx)
  // })
}

const f2 = async(ctx, ms) =>  {
  await sleep(ms)
  const api = 'res2'
  str += 'f2()'
  return 'f2() api=' + api + ',' + 'ctx=' + ctx
  // return new Promise(resolve => {
  //     str += 'f2()'
  //     resolve('f2() api=' + api + ',' + 'ctx=' + ctx)
  // })
}

const f3 = async(ctx, ms) =>  {
  await sleep(ms)
  const api = 'res3'

  str += 'f3()'
  return 'f3() api=' + api + ',' + 'ctx=' + ctx
  // return new Promise(resolve => {
  //     str += 'f3()'
  //     resolve('f3() api=' + api + ',' + 'ctx=' + ctx)
  // })
  // equals
  // return 'f3() api=' + api + ',' + 'ctx=' + ctx
}


//////////////////////////////////////////////////////////
let str = ''

const PromiseAllExample = async() => {
  const res = await Promise.all(
    [f1("ctx1", 2000), f2("ctx2", 1500), f3("ctx3", 500)]
  )
  console.log('res=',res)
  console.log('str=', str)
}

const PromiseRaceExample = async() => {
  const res = await Promise.race(
    [f1("ctx1", 2000), f2("ctx2", 1500), f3("ctx3", 500)]
  )
  console.log('res=',res)
  console.log('str=', str)
}

PromiseAllExample()

// PromiseRaceExample()