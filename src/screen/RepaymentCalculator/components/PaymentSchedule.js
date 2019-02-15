import React from 'react'
import { Table, Row, Col } from 'antd'
import calculateTotalRepayment from '../../../utils/calculateTotalRepayments'
import {
    formatRepaymentSchedule,
    formatCurrency
} from '../../../utils/format'

const columns = [{
    title: 'Month',
    dataIndex: 'month',
    key: 'month',
}, {
    title: 'Original Loan',
    dataIndex: 'original',
    key: 'original',
}, {
    title: 'Interest',
    dataIndex: 'interest',
    key: 'interest',
},
{
    title: 'Monthly repayment',
    dataIndex: 'monthlyRepayment',
    key: 'monthlyRepayment',
}];

const TableFooter = ({ paymentSchedule }) => {
    const total = calculateTotalRepayment(paymentSchedule)
    return (
        (
            <Row>
                <Col span={4}>Total Repayments</Col>
                <Col span={4}>{formatCurrency(total.original)}</Col>
                <Col span={3}></Col>
                <Col span={4}>{formatCurrency(total.interest)}</Col>
                <Col span={1}></Col>
                <Col span={4}>{formatCurrency(total.monthlyRepayment)}</Col>
            </Row>
        )
    )
}

const PaymentSchedule = ({ paymentSchedule }) => (
    <Table
        dataSource={formatRepaymentSchedule(paymentSchedule)}
        rowKey='month'
        columns={columns}
        footer={() => <TableFooter paymentSchedule={paymentSchedule} />}
        pagination={false}
    />
)



export default PaymentSchedule;