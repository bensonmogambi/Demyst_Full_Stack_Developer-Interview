import React, { useEffect, useState } from 'react';
import { Layout, Space, Spin } from 'antd';
import { footerStyle } from '../LandingPage/styles.js';
import { Content } from 'antd/es/layout/layout.js';
import { contentStyle, headerStyle, headerText } from './styles.js';
import DetailsForm from '../../components/Form/index.js';
import { applicationId } from '../../api/services.js';
import { useNavigate } from 'react-router-dom';
import { Route as RouteName } from '../../navigation/Routes.js';

const { Header, Footer } = Layout;

const LoanDetails = () => {
  const [appToken, setAppToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    applicationId()
      .then((response) => response.json())
      .then((data) => {
        setAppToken(data.appId);
      });
  });

  const requestBalanceSheet = (form) => {
    const data = {
      tokenId: appToken,
      accountingProvider: form.accountingProvider,
      businessName: form.businessName,
      startYear: form.yearEstablished,
      loanAmount: form.loanAmount
    };

    navigate(RouteName.viewDetails, { state: { data } });
  };

  return appToken ? (
    <Space direction="vertical" style={{ width: '100%', height: '100%' }} size={[0, 64]}>
      <Layout>
        <Header style={headerStyle}>
          <div style={headerText}>Get your business loan now!</div>
        </Header>
        <Content style={contentStyle}>
          <DetailsForm onFinish={(form) => requestBalanceSheet(form)} />
        </Content>
        <Footer style={footerStyle}>
          2023 All rights reserved. Development by Evan Edwin Lopez
        </Footer>
      </Layout>
    </Space>
  ) : (
    <Space
      direction="vertical"
      style={{ width: '100%', height: '100%', justifyContent: 'center' }}
      size={[0, 64]}>
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </Space>
  );
};

export default LoanDetails;
