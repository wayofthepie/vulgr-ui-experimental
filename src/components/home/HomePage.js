/**
 *
 */
'use strict';

import React from 'react';
import {Link} from 'react-router';
import {ToolbarGroup, ToolbarTitle, ToolbarSeparator} from 'material-ui/Toolbar';
import AnalysisSummaryCard from '../analysis/summary/AnalysisSummaryCard';

// Some fake data.
const ANALYSIS = {
  displayName: 'Spring Core',
  version: '4.1.0',
  timestamp: '12 September 2017 @ 15:30:12',
  vulnerabilities: [{
    id: 'CVE-1999-018',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non nibh vitae ' +
    'ipsum aliquam posuere volutpat id arcu. Nunc finibus, turpis vel lobortis laoreet, nisl diam ' +
    'tincidunt nibh, non condimentum mi ante sed risus. Curabitur fermentum nunc ac mi varius tincidunt. ' +
    'Morbi vel consequat eros. ' +
    'Maecenas vitae ligula vitae velit accumsan rutrum. Praesent in nulla ' +
    'ut odio feugiat ornare ut vitae elit. Donec vitae consectetur purus. Quisque quis tellus nec ' +
    'nisi rutrum congue nec a lacus. Suspendisse auctor magna eu nunc feugiat, non placerat elit tincidunt.'
  }, {
    id: 'CVE-1999-019',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non nibh vitae ' +
    'ipsum aliquam posuere volutpat id arcu. Nunc finibus, turpis vel lobortis laoreet, nisl diam ' +
    'tincidunt nibh, non condimentum mi ante sed risus. Curabitur fermentum nunc ac mi varius tincidunt. ' +
    'Morbi vel consequat eros. Maecenas vitae ligula vitae velit accumsan rutrum. Praesent in nulla ' +
    'ut odio feugiat ornare ut vitae elit. Donec vitae consectetur purus. Quisque quis tellus nec ' +
    'nisi rutrum congue nec a lacus. Suspendisse auctor magna eu nunc feugiat, non placerat elit tincidunt.'
  }]
};

class HomePage extends React.Component {
  render() {
    return <AnalysisSummaryCard analysis={ANALYSIS} />
  }
}

export default HomePage;
