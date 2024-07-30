// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum using recursive approach
const sum = (arr, total = 0, counter = 0) => {
    if (counter === arr.length) return total;
    // total += arr[counter]
    // counter++
    return sum(arr,total + arr[counter], counter + 1);
}

// Reverse string using recursive approach
const reverse = (str, reverseStr = '', index = 1) => {
    if (index === str.length + 1) return reverseStr;
    return reverse (str, reverseStr + str[str.length - index], index + 1)
};

// Iterative approach to solving the fibonacci problem
const fibRec = (n, fibSequence = []) => {
    if (n <= 1) return n; // Base cases: fib(0) = 0, fib(1) = 1
    if (fibSequence[n] !== undefined) return fibSequence[n]; // Check if value is already computed
    
    fibSequence[n] = fibRec(n - 1, fibSequence) + fibRec(n - 2, fibSequence); // Recursively calculate and store result
    return fibSequence[n];
};

// Recursive fibonacci
const fibIter = (n) => {
    if (n <= 1) return n; 
    let fibSequence = [0, 1]; 
    for (let i = 2; i <= n; i++) {
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }

    return fibSequence[n];
};

// Return the index of target in arr, or -1 if not found using recursion 
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {};

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
