/**
 *
 */
'use strict';

import React from 'react';
import {Link} from 'react-router';
import AnalysisList from '../analysis/AnalysisList';
import uuidV4 from 'uuid/v4';

/**
 * Mock up some data for now.
 */
let createAnalysis = (projectId, vulnerabilities) => {
  return {
    timestamp: new Date(Date.now()).toUTCString(),
    id: uuidV4(),
    projectId,
    vulnerabilities
  };
};

/**
 * Some fake data for now.
 */
const analyses = [
  createAnalysis('magic-beans', [
    {
      id: 'CVE-1999-0018',
      severity: 2
    }, {
      id: 'CVE-1999-0024',
      severity: 9
    }, {
      id: 'CVE-1999-0040',
      severity: 8
    },
  ]),
  createAnalysis('beanstalk', [])
];

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className='jumbotron'>
          <h1>Vulgr</h1>
          <Link to='about' className='btn btn-primary btn-lg'>Learn more</Link>
        </div>
        <AnalysisList analyses={analyses} />
      </div>
    );
  }
}

export default HomePage;
