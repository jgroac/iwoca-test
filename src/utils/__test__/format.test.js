
import {
    formatRepaymentSchedule,
    formatCurrency,
} from '../format';

describe('format', () => {
    it('formatCurrency should format the given value to GBP', () => {
        expect(formatCurrency(19)).toEqual('£19.00')
    })

    it('should return an array with the repayment schedule', () => {
        const repaymentSchedule = [{
            month: 1,
            original: 2500,
            interest: 333,
            monthlyRepayment: 2833
        },
        {
            month: 2,
            original: 2500,
            interest: 250,
            monthlyRepayment: 2750
        },
        {
            month: 3,
            original: 2500,
            interest: 167,
            monthlyRepayment: 2667
        },
        {
            month: 4,
            original: 2500,
            interest: 83,
            monthlyRepayment: 2583
        }]

        const repaymentScheduleFormated = formatRepaymentSchedule(repaymentSchedule)

        expect(repaymentScheduleFormated[2]).toEqual({
            month: 3,
            original: `£2,500.00`,
            interest: `£167.00`,
            monthlyRepayment: `£2,667.00`,
        })
    })
})