/**
 *
 */
'use strict';

import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {AnalysisListRow} from './AnalysisListRow';

const VULNERABILITIES = [
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
];

const ANALYSIS = {
  timestamp: 'Sat Jul 23 02:16:57 2016',
  id: 'r23f425c',
  projectId: 'magic-beans',
  vulnerabilities: VULNERABILITIES
};

let init = () => {
  const props = {
    analysis: ANALYSIS
  };
  return shallow(<AnalysisListRow {...props} />);
};

describe('AnalysisListRow', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = init();
  });

  it('should mark row as danger', () => {
    // act
    const analysesRendered = wrapper.find('tr');
    const nodes = analysesRendered.nodes;

    // assert
    expect(nodes.length).toBe(1);
    expect(nodes[0].props.className).toBe('danger');
  });

  it('should display correct data', () => {
    // act
    const analysesRendered = wrapper.find('td');
    const nodes = analysesRendered.nodes;

    // assert
    expect(nodes.length).toBe(4);
    expect(nodes[0].props.children).toBe(ANALYSIS.timestamp);
    expect(nodes[1].props.children).toBe(ANALYSIS.projectId);

    // fixme: these assume ascending order
    let actualVulnerabilities = nodes[2].props.children.props.children;
    expect(actualVulnerabilities[0].key).toBe(VULNERABILITIES[0].id);
    expect(actualVulnerabilities[1].key).toBe(VULNERABILITIES[1].id);
    expect(actualVulnerabilities[2].key).toBe(VULNERABILITIES[2].id);

    expect(nodes[3].props.children.props.to).toBe('/analysis/' + ANALYSIS.id);
  });
});
