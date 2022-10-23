export type OperatorTypes = 'EQ' | 'GT' | 'GTE' | 'LT' | 'LTE' | 'BE';

export type OperatorListElement = {
  text: string;
  value: OperatorTypes;
}

type OperatorIdTypes = {
  [key: string]: OperatorTypes;
}

export const OPERATOR_IDS: OperatorIdTypes = {
  EQ: 'EQ',
  GT: 'GT',
  GTE: 'GTE',
  LT: 'LT',
  LTE: 'LTE',
  BE: 'BE',
}

const OPERATOR_LIST: OperatorListElement[] = [{
  text: 'equal =',
  value: OPERATOR_IDS.EQ,
}, {
  text: 'greater than >',
  value: OPERATOR_IDS.GT,
}, {
  text: 'greater or equal ≥',
  value: OPERATOR_IDS.GTE,
}, {
  text: 'less than <',
  value: OPERATOR_IDS.LT,
}, {
  text: 'less or equal ≤',
  value: OPERATOR_IDS.LTE,
}, {
  text: 'between',
  value: OPERATOR_IDS.BE,
}];

export default OPERATOR_LIST;
