const b = require("./b.ts");

console.log(require.resolve("./b.ts"));

console.log(b);

b();

const fun = (...params) => {
  console.log(params);
};

fun(
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1"
);
