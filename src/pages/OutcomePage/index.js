import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Space, Spin } from 'antd';
import Title from 'antd/es/typography/Title';
import { getDecision } from '../../api/services';

const Outcome = () => {
  const { state } = useLocation();
  const [outcome, setOutcome] = useState(null);

  useEffect(() => {
    if (outcome === null) {
      getDecision(state.mapDecisionData)
        .then((response) => response.json())
        .then((data) => {
          console.log('okayy', data);
          setOutcome(data);
        });
    }
  });
  return outcome ? (
    <Space direction="vertical" style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
      <Title>Your loan application has been {outcome.outcome}</Title>
      <Title>Approved amount is {outcome.approvedAmount}</Title>
      <Title>Approved term {outcome.approvedTerm}</Title>
      <Title>Interest rate {outcome.approvedInterestRate}</Title>
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

export default Outcome;
