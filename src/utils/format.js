export const formatCurrency = (value) => {
    const formater = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' })
    return formater.format(value)
}

export const formatRepaymentSchedule = (paymentSchedule) => paymentSchedule.map((month) => ({
    ...month,
    original: formatCurrency(month.original),
    interest: formatCurrency(month.interest),
    monthlyRepayment: formatCurrency(month.monthlyRepayment),
}))

