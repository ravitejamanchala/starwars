import React from "react";
import { LineChart } from 'react-chartkick';
import 'chartkick/chart.js'

export default function Chart() {
  const customOptions = {
    scales: {
      x: {
        grid: {
          display: false, // Remove the x-axis grid
        },
      },
      y: {
        grid: {
          display: false, // Remove the y-axis grid
        },
      },
    },
    elements: {
      line: {
        borderColor: 'green', // Set the line color to blue
      },
    },
  };

  return (
    <div className="p-4 bg-white">
      <LineChart
        data={{"Sun": 1, "Mon": 3, "Tue": 1, "Wed": 3, "Thu": 1, "Fri": 3, "Sat": 1}}
        height="112px"
        library={customOptions}
        colors={["#8B54FF"]}
      />
      
    </div>
  );
}
