import React from 'react';
import { Button, Layout, Space } from 'antd';
import {
  applyBtn,
  businessText,
  contentStyle,
  footerStyle,
  headerStyle,
  headerText,
  loanText,
  sloganSpan,
  sloganText
} from './styles.js';
import { Content } from 'antd/es/layout/layout.js';
import Title from 'antd/es/typography/Title.js';
import globalStyle from '../../theme/GlobalStyle.module.css';
import { useNavigate } from 'react-router-dom';
import { Route as RouteName } from '../../navigation/Routes.js';

const { Header, Footer } = Layout;

const Home = () => {
  const navigate = useNavigate();

  return (
    <Space direction="vertical" style={{ width: '100%', height: '100%' }} size={[0, 64]}>
      <Layout>
        <Header style={headerStyle}>
          <div style={headerText}>WE OFFER SMALL</div>
          <div style={businessText}>BUSINESS</div>
          <div style={loanText}>LOAN</div>
        </Header>
        <Content style={contentStyle}>
          <Title style={sloganText} level={2}>
            <span style={sloganSpan}>&gt; No application fee</span>
            <span style={sloganSpan}>&gt; Approved instantly</span>
            <span style={sloganSpan}>&gt; No upfront cost</span>
            <span style={sloganSpan}>
              <br /> &gt; 2% Interest
            </span>
            <span style={sloganSpan}>&gt; Flexible payment options</span>
          </Title>
          <div className={globalStyle.alignSelfCenter}>
            <Title className={globalStyle.colorPurple}>As Your Need. Always Flexible</Title>
            <Button block style={applyBtn} onClick={() => navigate(RouteName.loanDetails)}>
              Click here to apply!
            </Button>
          </div>
        </Content>
        <Footer style={footerStyle}>
          2023 All rights reserved. Development by Evan Edwin Lopez
        </Footer>
      </Layout>
    </Space>
  );
};

export default Home;
