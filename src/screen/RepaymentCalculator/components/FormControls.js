import React from 'react'
import { Form, Input, Row, Col } from 'antd'

const inputStyle = { width: '99%' }

const FormControls = ({
    amount,
    duration,
    interestRate,
    onChange
}) => (
        <Form layout='vertical'>
            <Row>
                <Col sm={4} offset={6}>
                    <Form.Item
                        label="Amount ()"
                        style={inputStyle}
                    >
                        <Input
                            aria-label="amount-input"
                            type='number'
                            name='amount'
                            placeholder=""
                            value={amount}
                            onChange={onChange}
                        />
                    </Form.Item>
                </Col>
                <Col sm={4}>
                    <Form.Item
                        label="Duration (months)"
                        style={inputStyle}
                    >
                        <Input
                            aria-label="duration-input"
                            type='number'
                            name='duration'
                            placeholder=""
                            value={duration}
                            onChange={onChange}
                        />
                    </Form.Item>
                </Col>
                <Col sm={4}>
                    <Form.Item
                        label="Rate (%)"
                        style={inputStyle}
                    >
                        <Input
                            aria-label="interest-rate-input"
                            type='number'
                            name='interestRate'
                            placeholder=""
                            value={interestRate}
                            onChange={onChange}
                        />
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )

export default FormControls;