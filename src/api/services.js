const BASE_URL = 'http://localhost';
const PORT = '8000';
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

export const applicationId = () => {
  return fetch(`${BASE_URL}:${PORT}/initiateApplication`, { ...options });
};

export const getBalanceSheet = (data) => {
  return fetch(`${BASE_URL}:${PORT}/balance-sheet`, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data)
  });
};

export const getDecision = (data) => {
  return fetch(`${BASE_URL}:${PORT}/decision-engine`, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data)
  });
};
