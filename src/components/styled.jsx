import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;
`;

export const Calculator = styled.div``;

export const Title = styled.p`
  font-size: 40px;
  text-align: right;
  padding: 20px 0;
`;

export const Row = styled.li`
  display: flex;
  gap: 5px;
`;

export const Picker = styled.div`
  background-color: #f1f3f4;
  color: #202124;
  border: 1px solid #f1f3f4;
  border-radius: 4px;
  height: 80px;
  width: 120px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CalculatorList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const History = styled.div`
  ${Title} {
    text-align: left;
  } ;
`;

export const HistoryList = styled.ul``;

export const HistoryItem = styled.li`
  padding: 10px 0;
`;
