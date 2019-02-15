
const calculateTotalRepayments = (repaymentSchedule) => {
    if (!Array.isArray(repaymentSchedule)) {
        throw new Error('The repaymentScheduled is not an array');
    }

    const totals = {
        original: 0,
        interest: 0,
        monthlyRepayment: 0
    }

    return repaymentSchedule.reduce((totals, currentMonth) => {
        totals.original += currentMonth.original
        totals.interest += currentMonth.interest
        totals.monthlyRepayment = currentMonth.monthlyRepayment

        return totals
    }, totals)
}

export default calculateTotalRepayments