/**
 *
 */
'use strict';

import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {AnalysisPropTypes, severityToCssClass, highestSeverity} from './analysis';

/**
 * Convert a vulnerability to a link.
 * @param vulnerability the vulnerability.
 * @returns {XML}
 */
let vulnerabilityToItem = (vulnerability) => {
  return <li key={vulnerability.id}>{vulnerability.id}</li>;
};

/**
 * Create a link from an array of vulnerabilities.
 * @param vulnerabilities the array.
 * @returns {XML}
 */
let createLink = (vulnerabilities) => {
  if (vulnerabilities.length === 0) {
    return <span className='text-success'><strong>No vulnerabilities found!</strong></span>;
  } else {
    return <ul>{vulnerabilities.map(vulnerabilityToItem)}</ul>
  }
};

/**
 * Create a table row for an analysis.
 * @param analysis the analysis to map to the table.
 * @returns {XML}
 */
let createRow = (analysis) => {
  return (
    <tr className={severityToCssClass(highestSeverity(analysis.vulnerabilities))}>
      <td>{analysis.timestamp}</td>
      <td>{analysis.projectId}</td>
      <td>
        {createLink(analysis.vulnerabilities)}
      </td>
      <td><Link to={'/analysis/' + analysis.id}>View Analysis</Link></td>
    </tr>
  );
};

export const AnalysisListRow = ({analysis}) => {
  return (
    createRow(analysis)
  );
};

AnalysisListRow.propTypes = {
  analysis: AnalysisPropTypes
};

export default AnalysisListRow;
