
/**
 * It calculates the repayment schedule for a loan
 *
 * @param {Number} amount amount of the loan
 * @param {Number} duration loan duration in months
 * @param {Number} rate interest rate
 */
const calculateLoan = (
    amount,
    duration,
    rate
) => {
    const parsedAmount = Number(amount)
    const parsedDuration = Number(duration)
    const parsedRate = Number(rate)
    const areInvalidParams = isNaN(Number(parsedAmount))
        || isNaN(parsedDuration)
        || isNaN(parsedRate)

    if (areInvalidParams) {
        throw new Error('All the parameters should be numbers');
    }

    const months = [...Array(parsedDuration)].map((u, i) => i)
    const originalLoan = parsedAmount / parsedDuration;
    let residualAmount = parsedAmount

    const schedule = months.map((index) => {
        const interest = Math.round(residualAmount * (parsedRate / 100))
        residualAmount -= originalLoan
        return {
            month: index + 1,
            original: originalLoan,
            interest,
            monthlyRepayment: interest + originalLoan
        }
    })

    return schedule;
}

export default calculateLoan;