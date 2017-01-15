/**
 *
 */
'use strict';
import React, {PropTypes} from 'react';
import ReactTooltip from 'react-tooltip';

/**
 * A status icon.
 * @param iconType {String} the icon type.
 * @param attributes {Object} a set of extra attributes to apply to the icon.
 * @param style {Object} how to style the icon.
 * @returns {XML}
 */
let statusIcon = (iconType, attributes, style) => {
  return (
    <i className='material-icons md-36' {...attributes}
       style={style}>
      {iconType}
    </i>
  );
};

/**
 * A status icon with a possible tooltip. If tooltipInfo object is empty then
 * no tooltip will be applied.
 * @param iconType {String} the type of icon.
 * @param style {Object} style to apply to this icon.
 * @param tooltipInfo {Object} how to build the tooltip, empty for no tooltip.
 * @returns {XML}
 */
let tooltippableStatusIcon = (iconType, tooltipInfo, style) => {
  let tooltip = function () {
    if (tooltipInfo) {
      return (
        <ReactTooltip place='top'
                      id={tooltipInfo.id}
                      type={tooltipInfo.type}
                      effect='solid'>
          <span ><strong>{tooltipInfo.message}</strong></span>
        </ReactTooltip>
      );
    } else {
      return null;
    }
  };

  let tooltippedAttributes = () => {
    return tooltipInfo ? {'data-tip': '', 'data-for': tooltipInfo.id} : [];
  };

  return (
    <div>
      { tooltip() }
      { statusIcon(iconType, tooltippedAttributes(), style) }
    </div>
  );
};

/**
 * A status icon with a possible tool tip.
 * @param iconType {String} they type of icon.
 * @param tooltipInfo {Object} how to build the tooltip.
 * @param style {Object} the style for this icon.
 * @returns {XML}
 */
export const StatusIcon = ({iconType, tooltipInfo, style}) => {
  return tooltippableStatusIcon(iconType, tooltipInfo, style);
};

StatusIcon.propTypes = {
  iconType: PropTypes.string.isRequired,
  tooltipInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }),
  style: PropTypes.object
};

export default StatusIcon;
