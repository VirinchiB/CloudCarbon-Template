import React from 'react';
import { Tree32, Earth32, Money32, Calendar32 } from "@carbon/icons-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import "./EmissionsMonthly.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    // legend: {
    //   position: 'top' as const,
    // },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  datasets: [
    {
      label: "First dataset",
      data: [82, 83, 83, 84, 28, 12],
      fill: true,
      backgroundColor: "#74dc9e",
      borderColor: "#74dc9e",
    }
  ],
};

function EmissionsMonthly() {
  return (
    <div class="row">
      <div class="col-lg-10">
        <div class="row headder">
          <span>Emissions by month</span>
        </div>
        <div class="row headdertag">
          <span>-3kgCO2 from last month</span>
        </div>
      </div>
      <div class="col-lg-2" style={{display:'flex',justifyContent:'center'}}>
        <Calendar32 aria-label="Add" className="icon" />
      </div>
      <div class="col-lg-12">
        <Line data={data} />
      </div>
    </div>
  );
}

export default EmissionsMonthly;
