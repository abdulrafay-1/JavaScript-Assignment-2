function sum (num1) {
        return function(num2) {
                return num1 + num2;
        }
}
let result = sum (5);
console.log(result(10));
