import { OPERATOR_IDS } from './OperatorList';

export const formatVersion = (operator: string, versions: string[]) => {
  const mainVer = versions[0];
  switch(operator) {
    case OPERATOR_IDS.GT:
      return `> ${mainVer}`;
      break;
    case OPERATOR_IDS.GTE:
      return `≥ ${mainVer}`;
      break;
    case OPERATOR_IDS.LT:
      return `< ${mainVer}`;
      break;
    case OPERATOR_IDS.LTE:
      return `≤ ${mainVer}`;
      break;
    case OPERATOR_IDS.BE:
      return `]${versions.join('-')}[`;
      break;
    default:
      return mainVer;
      break;
  };
};

export const validateVersionFormat = (value: string): boolean => !!!value.match(/\d{1,3}\.\d{1,3}\.\d{1,3}$/)
