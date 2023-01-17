var fizzBuzz = function(n) {
    bank = [];
    for (i = 1; i <= n; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            bank.push('FizzBuzz')
        }
        else if (i % 3 == 0) {
            bank.push('Fizz')
        }
        else if (i % 5 == 0) {
            bank.push('Buzz')
        }
        else {
            bank.push(i.toString())
        }
    }
    console.log(bank)
    return bank
};

fizzBuzz(3)
fizzBuzz(5)
fizzBuzz(15)