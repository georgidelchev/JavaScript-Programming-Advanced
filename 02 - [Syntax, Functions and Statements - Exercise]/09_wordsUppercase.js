function solve(input) {
    var result = input
        .replace(/[^\w\s]/gi, ' ')
        .split(' ')
        .map(element => element.toUpperCase())
        .filter(element => element);

    console.log(result.join(', '))
}

solve('Hi, how are you?');
solve('hello');
solve('Functions in JS can be nested, i.e. hold other functions');
