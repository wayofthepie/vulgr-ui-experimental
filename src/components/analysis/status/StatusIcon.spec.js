/**
 *
 */
'use strict';

import expect from 'expect';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import {mount, shallow} from 'enzyme';
import {StatusIcon} from './StatusIcon';

const DEFAULT_ICON_INFO = {
  iconType: 'check_circle',
  tooltipInfo: {id: 'successTooltip', type: 'success', message: 'Success!'},
  style: {color: 'green'}
};

let init = ({iconType, tooltipInfo, style}) => {
  const props = {
    iconType,
    tooltipInfo,
    style
  };
  return shallow(<StatusIcon {...props} />);
};

describe('StatusIcon', () => {

  describe('when given tooltip info', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = init(DEFAULT_ICON_INFO);
    });

    it('icon should have necessary elements and attributes', () => {
      // act
      const iconNodes = wrapper.find('i').nodes;

      // assert
      expect(iconNodes.length).toBe(1);
      const icon = iconNodes[0];
      expect(icon.props['data-for']).toBe(DEFAULT_ICON_INFO.tooltipInfo.id);
    });

    it('tooltip should have necessary elements and attributes', () => {
      // act
      const tooltipNodes = wrapper.find(ReactTooltip).nodes;

      // assert
      expect(tooltipNodes.length).toBe(1);
      const tooltip = tooltipNodes[0];
      expect(tooltip.props.id).toBe(DEFAULT_ICON_INFO.tooltipInfo.id);
      expect(tooltip.props.type).toBe(DEFAULT_ICON_INFO.tooltipInfo.type);
      expect(tooltip.props.style).toBe(DEFAULT_ICON_INFO.tooltipInfo.style);
    });

    it('tooltip message should be correct', () => {
      // act
      const messageNodes = wrapper.find(ReactTooltip).find('span').nodes;

      // assert
      expect(messageNodes.length).toBe(1);
      const messageTextNode = messageNodes[0].props.children;
      expect(messageTextNode.type).toBe('strong');
      expect(messageTextNode.props.children).toBe(DEFAULT_ICON_INFO.tooltipInfo.message);
    });
  });

  describe('when not given tooltip info', () => {

    it('should not render tooltip elements', () => {
      // arrange
      let iconInfo = Object.assign({}, DEFAULT_ICON_INFO, {tooltipInfo: null});
      // act
      const tooltipNodes = init(iconInfo).find(ReactTooltip).nodes;
      // assert
      expect(tooltipNodes.length).toBe(0);
    });
  });

});
