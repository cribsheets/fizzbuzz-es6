/*
  To use the forEach method, we need an array.

  Unfortunately, unlike Python or Ruby, Javascript has no ranges; as a result,
  we need to create our own.

  Because of some shenanigans in how Javascript defines an array, we can do that
  by following these steps, shown below:
    1. Create a new array of length 101 -- i.e., with 100 empty slots
    2. Fill each one of those slots with `null` (this is the weird bit)
    3. Go over the array one by one; since we want a range, from 0 to 100, we
       can just use the index of the value, which is the second argument to the
       callback -- e.g., we want the value in slot 5 to be 5, etc.
*/

const values = new Array(101) // create a new Array with an array of length 101
  .fill(null) // put 'null' into every slot.
  .map((_, index) => index); // use 'map' and take the index of each item

/*
  Like `map` above, `forEach` take a callback -- the first argument is the
  value, and the second argument (which we don't use) as with map is the index.

  Unlike our `for` loops, however, you can't simply 'continue' inside a forEach
  loop; hence using an `if/else if ...` pattern.
*/
values.forEach(currentValue => {
  if (currentValue % 15 === 0) {
    console.log('fizzbuzz');
  } else if (currentValue % 5 === 0) {
    console.log('buzz');
  } else if (currentValue % 3 === 0) {
    console.log('fizz');
  } else {
    console.log(currentValue);
  }
});
