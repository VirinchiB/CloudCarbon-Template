import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./YearlyEmissions.scss";

export const data = {
  //   labels: [
  //     "Emily's sales org",
  //     "Emily's marketing org"
  //   ],
  datasets: [
    {
      label: "# of Votes",
      data: [25, 75],
      backgroundColor: ["rgb(223 224 224)", "rgb(13 150 63)"],
      borderColor: ["rgb(223 224 224)", "rgb(13 150 63)"],
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
function YearlyEmissions() {
  return (
    <div>
      <div class="cardPercent">
        <span style={{ fontSize: "32px" }}>75%</span>
        <span>total annual usage</span>
      </div>
      <div class="col-lg-12 alignLeft p-1">
        <span>Yearly emissions to date</span>
      </div>
      <div class="col-lg-12 graphSize">
        <Doughnut data={data} options={Options} />
      </div>
      <div class="col-lg-12">
        <div class="row m-0">
            <span style={{textAlign:'start'}}><strong>Annual emission goal:</strong> 1000kgCo2</span>
        </div>
        <div class="row m-0">
            <span style={{textAlign:'start',fontSize:'10px'}}>Last update 6-31-2022</span>
        </div>
      </div>
      <div class="col-lg-12 cardFotter p-1">
        <p class="spancolor">
          Dive deeper and manage your emission data in <a href="#">Envizi</a>
        </p>
      </div>
    </div>
  );
}

export default YearlyEmissions;
