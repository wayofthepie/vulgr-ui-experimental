/**
 * Helper functions for dealing with analyses.
 */
'use strict';
import {PropTypes} from 'react';

const VulnerabilityPropTypes ={
  id: PropTypes.string.isRequired,
  severity: PropTypes.number.isRequired
};

export const AnalysisPropTypes = PropTypes.shape({
  timestamp: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  projectId: PropTypes.string.isRequired,
  vulnerabilities: PropTypes.arrayOf(PropTypes.shape(VulnerabilityPropTypes))
});

/**
* Get the highest severity in the array of vulnerabilities.
* @param vulnerabilities {Array} the array of vulnerabilities.
*/
export let highestSeverity = (vulnerabilities) => {
  return Math.max.apply(Math, vulnerabilities.map(v => {return v.severity;}));
};

/**
 * Convert a severity integer to a css class.
 * @param severity an integer between 1 and 10.
 * @returns {String}
 */
export let severityToCssClass = (severity) => {
  if (severity < 5) {
    return '';
  } else if (severity >= 5 && severity < 9) {
    return 'warn';
  } else {
    return 'danger';
  }
};
