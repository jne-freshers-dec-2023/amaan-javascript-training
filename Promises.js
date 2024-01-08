const myPromise = new Promise((resolved, rejected) => {
  const a = 4,
    b = 2;
  const c = a + b;
  c === 6
    ? resolved(`yes!, ${a} + ${b} = 6`)
    : rejected(`no!, ${a} + ${b} != 6`);
  //we use ternary operator instead of if else
});
let message;
myPromise
  .then((m) => {
    console.log(m);
  })
  .catch((err) => {
    console.log(err);
  });

//2nd way
function prom(complete) {
  return new Promise((resolve, reject) => {
    complete ? resolve("yes") : reject("no"); //we use ternary operator instead of if else
  })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}
prom(true);
