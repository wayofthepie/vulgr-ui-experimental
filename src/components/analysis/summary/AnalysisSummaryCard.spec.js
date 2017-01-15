/**
 *
 */
'use strict';

import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {AnalysisSummaryCard} from './AnalysisSummaryCard';

const ANALYSIS_LIST_ID = 'analysis-list';
const ANALYSES = [
  {timestamp: 'Sat Jul 23 02:16:57 2016', id: 'r23f425c', projectId: 'magic-beans', cves:[]},
  {timestamp: 'Tues Sept 12 06:23:12 2016', id: '432ffarf', projectId: 'beanstalk', cves:[]}
];
const CVE = {
  id:'CVE-1999-018',

};
