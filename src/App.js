import './App.css';
import React, { Component } from 'react'
import { Layout } from 'antd'
import CalculateLoan from './screen/CalculateLoan'

const styleTitle = { color: 'white' }
class App extends Component {
  render() {
    return (
      <Layout>
        <Layout.Header>
          <h1 style={styleTitle}>Calculate Loan</h1>
        </Layout.Header>
        <Layout.Content style={{ backgroundColor: 'white' }}>
          <CalculateLoan />
        </Layout.Content>
      </Layout>
    );
  }
}

export default App;
