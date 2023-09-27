/////////////////////////
// Truthy vs. Falsy
/////////////////////////

// Sometimes we need to evaluate a value as true/false regardless of it's data type. 'Falsy' values are those which evaluate to false. 'Truthy' values are those which evaluate to true.

// Falsy: null, undefined, false, NaN, 0, -0, 0n, ""
// Truthy: any value which is not falsy

if (true) {
  console.log('true')
} else {
  console.log('false')
}
