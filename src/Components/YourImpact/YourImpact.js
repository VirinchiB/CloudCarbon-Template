import { Tree32, Earth32, Money32, Calendar32 } from '@carbon/icons-react';
import "./YourImpact.scss";
import React from 'react'

function YearlyImpact() {
  const headder = {
    textAlign: "start",
    fontSize: "12px",
    fontWeight: 600,
  };
  const content = {
    fontSize: "12px",
    textAlign: "start",
    padding: "0.5rem 0.75rem",
  };
  return (
    <div>
      <div className="row" style={{ margin: "0 !important" }}>
        <div className="col-lg-12" style={headder}>
          <span>Your Impact</span>
        </div>
        <div className="col-lg-12" style={content}>
          <span style={{ display: "flex", alignItems: "center" }}>
            <Tree32 aria-label="Add" className="icon icon-custom-tree" />            
            You have saved <strong>&nbsp;20 Trees</strong> &nbsp;to date.
          </span>
        </div>
        <div className="col-lg-12" style={content}>
          <span style={{ display: "flex", alignItems: "center" }}>
            <Earth32 aria-label="Add" className="icon icon-custom-earth" />
            You have removed <strong>&nbsp;100 tons</strong> &nbsp;of carbon
          </span>
        </div>
        <div className="col-lg-12" style={content}>
          <span style={{ display: "flex", alignItems: "center" }}>
            <Money32 aria-label="Add" className="icon" />
            You have reduced your spending by <strong>&nbsp;20%</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

export default YearlyImpact;
