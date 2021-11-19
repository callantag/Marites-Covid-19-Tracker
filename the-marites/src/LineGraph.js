import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";

const buildChartData = (data, caseType = "cases") => {
  const chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      const newDataPoint = {
        x: date,
        y: data[caseType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[caseType][date];
  }
  return chartData;
};

const options = {
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      time: {
        format: "MM/DD/YY",
        tooltipFormat: "ll",
      },
    },

    y: {
      grid: {
        display: false,
      },
      ticks: {
        // Include a dollar sign in the ticks
        callback: function (value, index, values) {
          return numeral(value).format("0a");
        },
      },
    },
  },
  plugins: {
    legend: false,
  },
};

function LineGraph({ caseType }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
      .then((res) => res.json())
      .then((data) => {
        const chartData = buildChartData(data);
        setData(chartData);
      });
  }, []);

  return (
    <div>
      <Line
        options={options}
        data={{
          datasets: [
            {
              data: data,
              fill: true,
              backgroundColor: "rgba(176, 5, 2, 0.4)",
              borderColor: "#CC1034",
            },
          ],
        }}
      />
    </div>
  );
}

export default LineGraph;
