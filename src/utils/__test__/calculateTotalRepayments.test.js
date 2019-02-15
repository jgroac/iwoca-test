
import calculateTotalRepayments from '../calculateTotalRepayments';

describe('calculateTotalRepayments', () => {
    it('should calculate the total of repayments given a repayment schedule', () => {

        const totalRepayments = calculateTotalRepayments(
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

        expect(totalRepayments).toEqual({ original: 10000, interest: 833, monthlyRepayment: 2583 })
    })

    it('should throw if the given parameter is not an array', () => {

        expect(
            () => calculateTotalRepayments()
        ).toThrow()

        expect(
            () => calculateTotalRepayments(' ssssss')
        ).toThrow()

        expect(
            () => calculateTotalRepayments(null)
        ).toThrow()

        expect(
            () => calculateTotalRepayments(1)
        ).toThrow()
    })
})