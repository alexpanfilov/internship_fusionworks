// solution for task 3

const arr = [
  1,
  0,
  10,
  "0",
  "1",
  "",
  NaN,
  false,
  null,
  undefined,
  "false",
  "true",
];

for (let i = 0; i < arr.length; i++) {
  // iterating through arr
  if (Boolean(arr[i]) == true) {
    // checking if boolean value is true
    console.log(arr[i]);
  }
}
