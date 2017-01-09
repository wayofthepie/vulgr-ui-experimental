/**
 *
 */
'use strict';

import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {AnalysisList} from './AnalysisList';

const ANALYSIS_LIST_ID = 'analysis-list';
const ANALYSES = [
  {timestamp: 'Sat Jul 23 02:16:57 2016', id: 'r23f425c', projectId: 'magic-beans', vulnerabilities:[]},
  {timestamp: 'Tues Sept 12 06:23:12 2016', id: '432ffarf', projectId: 'beanstalk', vulnerabilities:[]}
];

let init = () => {
  const props = {
    analyses: ANALYSES
  };
  return shallow(<AnalysisList {...props} />);
};

describe('AnalysisList', () => {
  it('should display correct table headers', () => {
    // arrange
    const expectedHeaders = [
      'Timestamp',
      'Project',
      'Maybe Vulnerable To',
      'View'
    ];

    // act
    const wrapper = init();
    const analysesRendered = wrapper.find('th');
    const nodes = analysesRendered.nodes;

    // assert
    expect(nodes.length).toBe(4);
    let actualHeaders = nodes.map(n => n.props.children);
    expect(actualHeaders).toEqual(expectedHeaders);
  });

  it(`should have a table with id ${ANALYSIS_LIST_ID}`, () => {
    // act
    const wrapper = init();
    const nodes = wrapper.find(`table #${ANALYSIS_LIST_ID}`).nodes;

    // assert
    expect(nodes.length).toBe(1);
  });

});
