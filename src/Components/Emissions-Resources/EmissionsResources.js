import React from "react";
import { Tree32, Earth32, Money32, Calendar32 } from '@carbon/icons-react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./EmissionsResources.scss";

const labelData = [
  {
    id: 2,
    name: "Emily's marketing org ",
    value: "5%",
    color: "rgb(143 243 181)",
  },
  {
    id: 3,
    name: "Emily's org org ",
    value: "25%",
    color: "rgb(0 188 85)",
  },
  {
    id: 4,
    name: "Emily's dev org ",
    value: "40%",
    color: "rgb(0 122 40)",
  },
  {
    id: 1,
    name: "Emily's sales org ",
    value: "30%",
    color: "rgb(0 48 9)",
  },
];
export const data = {
  //   labels: [
  //     "Emily's sales org 30%",
  //     "Emily's marketing org 5%",
  //     "Emily's dev org 25%",
  //     "Emily's ops org 40%",
  //   ],
  datasets: [
    {
      label: "# of Votes",
      data: [25, 5, 40, 30],
      backgroundColor: [
        "rgb(0 48 9)",
        "rgb(143 243 181)",
        "rgb(0 188 85)",
        "rgb(0 122 40)",
      ],
      borderColor: [
        "rgb(0 48 9)",
        "rgb(143 243 181)",
        "rgb(0 188 85)",
        "rgb(0 122 40)",
      ],
      borderWidth: 1,
    },
  ],
};
const Options = {
    plugins: {
      tooltip: {
        enabled: false,
      }
    },
    cutout: '90%',
    responsive: true,
    maintainAspectRatio: false,
  }

ChartJS.register(ArcElement, Tooltip, Legend);

function EmissionsResources() {
  return (
    <div class="row">
      <div class="col-lg-10 alignLeft">
        <select class="selectDD">
          <option>Emission by resource group</option>
        </select>
      </div>
      <div class="col-lg-2 alignLeft">
      <Calendar32 aria-label="Add" className="icon"/>
      </div>
      <div class="col-lg-12 graphSize" style={{marginBottom: "2rem"}}>
        <Doughnut data={data} options={Options} />
      </div>
      <div class="col-lg-12">
        {labelData.map((label) => (
          <div class="row m-0 mb-2" key={label.id}>
            <div
              class="col-lg-1"
              style={{ backgroundColor: label.color }}
            ></div>
            <div class="col-lg-8 label">
              <span>{label.name}</span>
            </div>
            <div class="col-lg-3">
              <span>{label.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmissionsResources;
