let strings = ["hello", "world", "javascript", "programming"];

let sum = strings.reduce(function(total, current) {
  return total + current.length;
}, 0);

// Output the sum to the console
console.log(sum);
