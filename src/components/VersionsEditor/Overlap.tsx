import { OPERATOR_IDS, OperatorTypes } from './OperatorList';
import { VersionElementType } from './VersionsEditor';

// Transform a string (of format x.x.x) to type number for easier
// operator calculation
// Regex currently replaces dots and operator symbols (except BE)
const toNumber = (version: string): number => +version.replace(/\.| |\>|\<|\≥|\≤/g, '');

// Runs the corresponding operation
const checkOperator = (operator: OperatorTypes, a: number, b: number): boolean => {
  switch(operator) {
    case OPERATOR_IDS.GT:
      return a < b;
      break;
    case OPERATOR_IDS.GTE:
      return a <= b;
      break;
    case OPERATOR_IDS.LT:
      return a > b;
      break;
    case OPERATOR_IDS.LTE:
      return a >= b;
      break;
    case OPERATOR_IDS.BE:
      // @TODO: Implement Between overlap logic
      return false;
      break;
    default:
      return false;
      break;
  }
}

const checkOverlaps = (versions: VersionElementType[]): VersionElementType[] => {
  // first step, clear overlaps
  const clearedOverlaps = versions.map(v => ({...v, overlap: false }));

  return clearedOverlaps.reduce((acc, v, index) => {
    // Skip EQ, no overlapping possible.
    if (v.operator === 'EQ') {
      return acc;
    }

    // Go through each element in original array
    const mapped = acc.reduce((overlapeds, innerVersion, innerIndex) => {
      // Skip current index
      if (index === innerIndex) {
        return overlapeds;
      }

      const a = toNumber(v.version);
      const b = toNumber(innerVersion.version);

      const overlaps = checkOperator(v.operator, a, b);

      if (overlaps) {
        overlapeds[innerIndex] = {
          ...innerVersion,
          overlap: true,
        };

        overlapeds[index] = {
          ...v,
          overlap: true,
        }

        return overlapeds;
      }

      return overlapeds;
    }, [...acc]);

    return mapped;
  }, [...clearedOverlaps]);
}

export default checkOverlaps;
