module.exports = () => {
  console.log('b')
  console.log(Promise.resolve())
  console.log(Promise.resolve())
  c1 = {
    a: 1,
  }
  // const b = 1
  // const a = 1

  const fun = (...params) => {
    console.log(params)
  }
  fun(1, 2)
}
