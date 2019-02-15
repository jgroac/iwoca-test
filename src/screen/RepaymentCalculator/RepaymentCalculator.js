import React, { Component } from 'react'
import { Row, Col } from 'antd'
import FormControls from './components/FormControls'
import PaymentSchedule from './components/PaymentSchedule'

import calculateRepaymentSchedule from '../../utils/calculateRepaymentSchedule'


class RepaymentCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            duration: '',
            interestRate: '',
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        const { amount, duration, interestRate } = this.state
        const paymentSchedule = calculateRepaymentSchedule(amount, duration, interestRate)
        return (
            <>
                <FormControls
                    onChange={this.handleChange}
                    amount={amount}
                    duration={duration}
                    interestRate={interestRate}
                />
                <Row>
                    <Col xs={12} offset={6} >
                        <PaymentSchedule paymentSchedule={paymentSchedule} />
                    </Col>
                </Row>

            </>
        )
    }
}

export default RepaymentCalculator