import React from 'react';
import { render, waitForElement, cleanup, fireEvent } from 'react-testing-library';
import CalculateLoanPage from './CalculateLoanPage';


afterEach(cleanup);

describe('<CalculateLoanPage />', () => {
    let props;

    beforeEach(() => {
        props = {};
    });

    it('should show no data when the inputs are empty', () => {
        const { getByText } = render(<CalculateLoanPage {...props} />)
        expect(getByText('No Data')).toBeTruthy()
    });

    it('should render data the payment schedule when inputs has data', () => {
        const { getByLabelText, getByText } = render(<CalculateLoanPage {...props} />)

        const amountInput = getByLabelText('amount-input')
        const durationInput = getByLabelText('duration-input')
        const rateInput = getByLabelText('interest-rate-input')

        fireEvent.change(amountInput, { target: { value: '10000', name: 'amount' } })
        fireEvent.change(durationInput, { target: { value: '4', name: 'duration' } })
        fireEvent.change(rateInput, { target: { value: '3.33', name: 'interestRate' } })

        expect(
            getByText('£10,833.00')
        ).toBeTruthy()

        expect(
            getByText('£250.00')
        ).toBeTruthy()
    });
});
