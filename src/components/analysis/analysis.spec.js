/**
 *
 */
'use strict';

import expect from 'expect';
import {highestSeverity, severityToCssClass} from './analysis';

const HIGHEST_SEVERITY = 9;
const VULNERABILITIES = [
  {
    id: 'CVE-1999-0018',
    severity: 2
  }, {
    id: 'CVE-1999-0024',
    severity: HIGHEST_SEVERITY
  }, {
    id: 'CVE-1999-0040',
    severity: 8
  },
];

describe('analysis', () => {
  describe('highestSeverity()', () => {
    it('should return the highest severity in an array of vulnerabilities', () => {
      expect(highestSeverity(VULNERABILITIES)).toBe(HIGHEST_SEVERITY);
    });
  });

  describe('severityToCssClass()', () => {
    it('should return an empty string when given a severity < 5', () => {
      expect(severityToCssClass(4)).toNotExist();
    });

    it('should return "warn" when given a severity >= 5 && < 9', () => {
      [5, 6, 7, 8].map(n => expect(severityToCssClass(n)).toBe('warn'));
    });

    it('should return "danger" when given a severity of 9 or 10', () => {
      [9,10].map(n=> expect(severityToCssClass(n)).toBe('danger'));
    });
  });
});
