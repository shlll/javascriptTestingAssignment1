const positiveSum = (numbers) => {
    let sum = 0;

    for (const number of numbers) {
        if (number > 0) {
            sum += number;
        }
    }

    return sum;
}