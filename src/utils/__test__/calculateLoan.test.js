
import calculateLoan from '../calculateLoan';

describe('calculateLoan', () => {
    it('should throw a error if the params are not numbers', () => {

        expect(
            () => calculateLoan(1, 2, 'ss')
        ).toThrow()

        expect(
            () => calculateLoan(1, 1, {})
        ).toThrow()

        expect(
            () => calculateLoan(1, 1)
        ).toThrow()

        expect(
            () => calculateLoan(1, NaN)
        ).toThrow()

        expect(
            () => calculateLoan(NaN, '1 + 4', '1 + 2')
        ).toThrow()
    })

    it('should return an array with the repayment schedule', () => {
        const repaymentSchedule = calculateLoan(10000, 4, 3.33)

        expect(repaymentSchedule).toEqual(
            [{
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
        )
    })
})