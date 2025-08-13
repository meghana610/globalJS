// numeric string used with - , / , *
// results in number type

let result;

result = "4" - "2"; 
console.log(result, "-", typeof(result));

result = "4" - 2;
console.log(result, "-", typeof(result));

result = "4" * 2;
console.log(result, "-", typeof(result));

result = "4" / 2;
console.log(result, "-", typeof(result));

