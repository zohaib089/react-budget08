const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('this is my resolved data');
    reject('it is wrong');
  }, 1500);
});
console.log('before');
promise
  .then(data => {
    console.log('1', data);
  })
  .catch(error => {
    console.log('error', error);
  });

console.log('after');
