import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import {
  Calculator,
  CalculatorList,
  Container,
  History,
  HistoryItem,
  HistoryList,
  Picker,
  Row,
  Title,
} from './styled';
import { UTILS } from './utils';

export const App = () => {
  const [formula, setFormula] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const handlePress = evt => {
      const { code, key } = evt;

      const numpad = code.includes('Numpad');
      const keyboard =
        code.includes('Digit') ||
        code.includes('Minus') ||
        code.includes('Equal') ||
        code.includes('Enter');

      numpad &&
        !isNaN(code[code.length - 1]) &&
        UTILS('number', key, formula, setFormula, setHistory);
      numpad &&
        isNaN(code[code.length - 1]) &&
        UTILS('operand', key, formula, setFormula, setHistory);

      keyboard &&
        (key === '=' || key === 'Enter') &&
        UTILS('operand', '=', formula, setFormula, setHistory);

      // UTILS(type, value, formula, setFormula, setHistory);
    };
    document.addEventListener('keydown', handlePress);
  }, []);

  const onClick = ({ currentTarget }) => {
    const { innerText: value } = currentTarget;
    const { value: type } = currentTarget.attributes.type;
    UTILS(type, value, formula, setFormula, setHistory);
  };

  console.log('formula', formula);

  return (
    <Container>
      <Calculator>
        <Title>{!formula ? '0' : formula}</Title>
        <CalculatorList>
          <Row>
            <Picker onClick={onClick} type="operand">
              (
            </Picker>
            <Picker onClick={onClick} type="operand">
              )
            </Picker>
            <Picker onClick={onClick} type="operand">
              %
            </Picker>
            <Picker onClick={onClick} type="operand">
              AC
            </Picker>
          </Row>
          <Row>
            <Picker onClick={onClick} type="number">
              7
            </Picker>
            <Picker onClick={onClick} type="number">
              8
            </Picker>
            <Picker onClick={onClick} type="number">
              9
            </Picker>
            <Picker onClick={onClick} type="operand">
              /
            </Picker>
          </Row>
          <Row>
            <Picker onClick={onClick} type="number">
              4
            </Picker>
            <Picker onClick={onClick} type="number">
              5
            </Picker>
            <Picker onClick={onClick} type="number">
              6
            </Picker>
            <Picker onClick={onClick} type="operand">
              *
            </Picker>
          </Row>
          <Row>
            <Picker onClick={onClick} type="number">
              1
            </Picker>
            <Picker onClick={onClick} type="number">
              2
            </Picker>
            <Picker onClick={onClick} type="number">
              3
            </Picker>
            <Picker onClick={onClick} type="operand">
              -
            </Picker>
          </Row>
          <Row>
            <Picker onClick={onClick} type="number">
              0
            </Picker>
            <Picker onClick={onClick} type="operand">
              .
            </Picker>
            <Picker onClick={onClick} type="operand">
              =
            </Picker>
            <Picker onClick={onClick} type="operand">
              +
            </Picker>
          </Row>
        </CalculatorList>
      </Calculator>
      <History>
        <Title>History</Title>

        <HistoryList>
          {history.map(({ formula, result }) => (
            <HistoryItem key={nanoid()}>
              <p>
                <span>{formula}</span> = <span>{result}</span>
              </p>
            </HistoryItem>
          ))}
        </HistoryList>
      </History>
    </Container>
  );
};
