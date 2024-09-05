const n = 10
const fibonacciSequence = []

function fibonacci(n) {
    if (n <= 1) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}


for (let i = 0; i < n; i++) {
    fibonacciSequence.push(fibonacci(i))
}

console.log(fibonacciSequence)