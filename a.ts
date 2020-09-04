const b = require('./b.ts')

console.log(require.resolve('./b.ts'))

console.log(b)
console.log(b)

b()

const fun = (...params) => {
  console.log(params)
  // const a = 1;
}

fun(
  '2',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1'
)
