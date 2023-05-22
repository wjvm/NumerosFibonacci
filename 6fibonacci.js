var numeroFibinacci = [0 ,1];
var n = 10;

for (i = 2; i <= n; i++){

   numeroFibinacci [i] = numeroFibinacci [i - 1] + numeroFibinacci [i - 2];

}

console.log(`Los primeros ${n} numeros Fibonacci son ${numeroFibinacci}`)