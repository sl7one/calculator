const FormulaParser = require('hot-formula-parser').Parser;
var parser = new FormulaParser();

export const UTILS = (type, value, formula, setFormula, setHistory) => {
  console.log('type', type, 'value', value);
  switch (type) {
    case 'number':
      setFormula(prev => prev + value);
      return;
    case 'operand':
      switch (value) {
        case 'AC':
          setFormula('');
          return;
        case '=':
          const { result, error } = parser.parse(formula);
          if (error) {
            setFormula(error);
            return;
          }
          setFormula(result);
          setHistory(prev => [...prev, { formula, result }]);
          return;
        default:
          setFormula(prev => prev + value);
      }
      return;
    default:
      setFormula('ERROR');
  }
};
