//import EmissionsLocation from "../Emissions-Location/EmissionsLocation";
import EmissionsMonthly from "../Emissions-Monthly/EmissionsMonthly";
import EmissionsResources from "../Emissions-Resources/EmissionsResources";
// import Headders from "../Headder/Headder";
import Recommendations from "../Recommendations/Recommendations";
import YearlyEmissions from "../Yearly-Emissions/YearlyEmissions";
import YearlyImpact from "../YourImpact/YourImpact";
import { Button } from 'carbon-components-react';
import "./Dashboard.scss";

function Dashboard() {
  return (
    <div>
      <div class="container mb-3" style={{ marginTop: "0 !important" }}>
        <div class="row pb-2">
          <div className="col-lg-6" style={{ textAlign: "start" }}>
            <select
              style={{
                border: "none",
                backgroundColor: "#f4f4f4",
                color: "black",
                fontSize: "28px",
              }}
            >
              <option>Carbon footprint dashboard</option>
            </select>
          </div>
          <div className="col-lg-6" style={{ textAlign: "end" }}>
            <Button kind="primary" size="field">
              {" "}
              Export chart
            </Button>
          </div>
        </div>
        <div class="row" style={{ paddingTop: "8px" }}>
          <div class="col-md-3">
            <div
              class="card mb-2"
              style={{ height: "calc(100vh - 500px)" }}
            >
              <YearlyEmissions></YearlyEmissions>
            </div>
          </div>
          <div class="col-md-3">
            <div
              class="card p-1 mb-2"
              style={{ height: "calc(100vh - 500px)" }}
            >
              <YearlyImpact></YearlyImpact>
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="card p-1 mb-2"
              style={{ height: "calc(100vh - 500px)" }}
            >
              <EmissionsMonthly></EmissionsMonthly>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div
              class="card p-1 mb-2"
              style={{ height: "calc(100vh - 500px)" }}
            >
              <EmissionsResources></EmissionsResources>
            </div>
          </div>
          <div class="col-md-3">
            <div
              class="card p-1 mb-2"
              style={{ height: "calc(100vh - 500px)" }}
            >
              <Recommendations></Recommendations>
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="card p-1 mb-2"
              style={{ height: "calc(100vh - 500px)" }}
            >
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
