const powerCalculator = function(base, ex) {
    if (ex <= 0) {
        return console.log('exponent should be >= 0')
    }
    if (ex === 1) {
        console.log(base)
        return base
    }

    return base * powerCalculator(base, (ex - 1))
}

powerCalculator(3, 3)