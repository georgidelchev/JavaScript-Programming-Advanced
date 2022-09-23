function solve(input) {
    let dict = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7,
    }

    console.log(dict[input] == undefined ? 'error' : dict[input]);
}

solve('Monday');
solve('Tuesday');
solve('Wednesday');
solve('Thursday');
solve('Friday');
solve('Saturday');
solve('Sunday');
solve('error');
