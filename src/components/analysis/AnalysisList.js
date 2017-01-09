/**
 *
 */
'use strict';

import React, {PropTypes} from 'react';
import AnalysisListRow from './AnalysisListRow';
import {AnalysisPropTypes} from './analysis';

export const AnalysisList = ({analyses}) => {
  return (
    <table className='table table-striped ' id='analysis-list'>
      <thead className='thead-inverse'>
      <tr>
        <th>Timestamp</th>
        <th>Project</th>
        <th>Maybe Vulnerable To</th>
        <th>View</th>
      </tr>
      </thead>
      <tbody>
      {analyses.map(analysis =>
        <AnalysisListRow key={analysis.id} analysis={analysis} />
      )}
      </tbody>
    </table>
  );
};

AnalysisList.propTypes = {
  analyses: PropTypes.arrayOf(AnalysisPropTypes)
};

export default AnalysisList;
