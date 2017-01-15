/**
 * Card used to summarize an analysis.
 */
'use strict';

import React, {PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {Link} from 'react-router';
import StatusIcon from '../status/StatusIcon';

/**
 * Construct a tooltipInfo object.
 * @param id {String} the id
 * @param type {String} the tool tip type.
 * @param message {String} the message to display
 * @returns {{id: *, type: *, message: *}}
 */
let buildTooltipInfo = (id, type, message) => {
  return {
    id,
    type,
    message
  };
};

/**
 * Construct a status icon.
 * @param iconType
 * @param tooltipInfo
 * @param style
 * @returns {XML}
 */
let createStatusIcon = (iconType, tooltipInfo, style) => {
  return (
    <StatusIcon
      iconType={iconType}
      tooltipInfo={tooltipInfo}
      style={style} />
  );
};

/**
 * Construct a success icon.
 * @returns {XML}
 */
let successIcon = () => {
  let icon = 'check_circle';
  let tooltipInfo = buildTooltipInfo('analysis-card-success-tooltip', 'success', 'Success!');
  let style = {color: 'green', float: 'left'};
  return createStatusIcon(icon, tooltipInfo, style);
};

let warningIcon = () => {
  let icon = 'warning';
  let marginLeft = 10;
  let tooltipInfo = buildTooltipInfo('analysis-card-warning-tooltip', 'warning', 'Warning!', {marginLeft});
  let style = {color: 'orange', float: 'left', marginLeft};
  return createStatusIcon(icon, tooltipInfo, style);
};

let errorIcon = () => {
  let icon = 'error';
  let marginLeft = 10;
  let tooltipInfo = buildTooltipInfo('analysis-card-error-tooltip', 'error', 'Error!', {marginLeft});
  let style = {color: 'red', float: 'left', marginLeft};
  return createStatusIcon(icon, tooltipInfo, style);
};

let analysisCardStatus = () => {
  return (
    <div>
      { successIcon() }
      { warningIcon() }
      { errorIcon() }
    </div>
  );

};

let cardHeader = (displayName, version, timestamp) => {
  return (
    <CardHeader title={<span><strong>{displayName}</strong> {version}</span>}
                subtitle={<span>{timestamp}</span>}
                actAsExpander
                showExpandableButton />
  );
};

let vulnerabilityItem = (vulnerability) => {
  return (
    <ListItem key={vulnerability.id} primaryText={vulnerability.id}
              secondaryText={vulnerability.summary} />
  );
};

export const AnalysisSummaryCard = ({analysis}) => {
  return (
    <Card style={{width: '30%', overflow:'hidden'}}>
      {cardHeader(analysis.displayName, analysis.version, analysis.timestamp)}
      <CardActions children={analysisCardStatus()} />
      <CardText expandable>
        <h2>Analysis Summary</h2>
        <List>
          <ListItem primaryText='View In-Depth Analysis' leftIcon={<ContentInbox />} />
        </List>
        <Divider />
        <Subheader>Detected Vulnerabilities</Subheader>
        {analysis.vulnerabilities.map(v => vulnerabilityItem(v))}
      </CardText>
    </Card>
  );
};

AnalysisSummaryCard.PropTypes = {
  analysis: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    vulnerabilities: PropTypes.shape({
      id: PropTypes.string.isRequired,
      summary: PropTypes.string
    })
  })
};

export default AnalysisSummaryCard;
