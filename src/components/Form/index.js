import { Card, Space, Button, Form, Input, DatePicker, Select } from 'antd';
import React, { useState } from 'react';
const { Option } = Select;

const DetailsForm = ({ onFinish }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contactNo: '',
    businessName: '',
    businessAddress: '',
    yearEstablished: '',
    loanAmount: '',
    accountingProvider: ''
  });

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex', width: '60%' }}>
      <Card title="Start by telling us your business:" size="small">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 700 }}
          initialValues={{ remember: true }}
          onFinish={() => onFinish(form)}
          autoComplete="off">
          <Form.Item label="Name">
            <Input
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item label="Email">
            <Input
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item label="Contact No.">
            <Input
              onChange={(e) => {
                setForm({ ...form, contactNo: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item
            label="Business Name"
            name="businessName"
            rules={[{ required: true, message: 'Please input your business name' }]}>
            <Input
              onChange={(e) => {
                setForm({ ...form, businessName: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item label="Business Address">
            <Input
              onChange={(e) => {
                setForm({ ...form, businessAddress: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item
            label="Year Established"
            name="yearEstablished"
            rules={[{ required: true, message: 'Please input the established year' }]}>
            <DatePicker
              picker="year"
              style={{ width: '100%' }}
              onChange={(_, dateString) => {
                setForm({ ...form, yearEstablished: dateString });
              }}
            />
          </Form.Item>
          <Form.Item
            label="Loan Amount"
            name="loanAmount"
            rules={[{ required: true, message: 'Please input loan amount' }]}>
            <Input
              onChange={(e) => {
                setForm({ ...form, loanAmount: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item
            label="Accounting Provider"
            name="accountingProvider"
            rules={[{ required: true, message: 'Please select accounting provider' }]}>
            <Select
              placeholder="Select a Accounting Provider"
              onChange={(value) => {
                setForm({ ...form, accountingProvider: value });
              }}
              allowClear>
              <Option value="xero">Xero</Option>
              <Option value="myob">MYOB</Option>
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Space>
  );
};

DetailsForm.propTypes = {
  onFinish: () => {}
};

export default DetailsForm;
