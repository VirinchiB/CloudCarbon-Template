import { Tree32, Earth32, Money32 } from '@carbon/icons-react';

import './Recommendations.scss'
function Recommendations() {
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
          <span>Recommendations</span>
        </div>
        <div className="col-lg-12" style={content}>
          <span class='mb-2'>
            <strong>Move to low-carbon regions</strong>
          </span>
          <span class='mb-2' style={{ fontSize: "10px" }}>
            move 3 resources from Dallas 06 to Washington 01.
          </span>
          <span class='mb-2' style={{ color: "#9a9a9a", fontSize: "14px",display:'flex',alignItems:'center' }}>
          <Tree32 aria-label="Add" className="icon icon-custom-tree" />
            Save 53 kgCo2 <a href="#">Show me</a>
          </span>
        </div>
        <div className="col-lg-12" style={content}>
          <span class='mb-2'>
            <strong>Delete potential zombie server</strong>
          </span>
          <span class='mb-2' style={{ fontSize: "10px" }}>
            Shut down ServerXYZ, hasn't been touched in 3 months
          </span>
          <span class='mb-2' style={{ color: "#9a9a9a", fontSize: "14px",display:'flex',alignItems:'center' }}>
          <Tree32 aria-label="Add" className="icon icon-custom-tree" />
            Save 53 kgCo2 <a href="#">Show me</a>
          </span>
        </div>
        <div className="col-lg-12" style={content}>
          <span class='mb-2' style={{ fontSize: "12px" }}>
            Save money and reduce emissions through
          </span>
          <span class='mb-2' style={{ ontSize: "12px" }}>
            optimization and scaling in <a href="#">Turbonomic</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Recommendations;
