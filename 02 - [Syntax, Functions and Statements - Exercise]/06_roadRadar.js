function solve(speed, area) {
    let areas = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };

    if (speed <= areas[area]) {
        console.log(`Driving ${speed} km/h in a ${areas[area]} zone`);
    }
    else {
        let speedViolation = speed - areas[area];
        let speedStatus;
        if (speedViolation <= 20) {
            speedStatus = 'speeding';
        } else if (speedViolation <= 40) {
            speedStatus = 'excessive speeding';
        } else {
            speedStatus = 'reckless driving';
        }

        console.log(`The speed is ${speedViolation} km/h faster than the allowed speed of ${areas[area]} - ${speedStatus}`);
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');