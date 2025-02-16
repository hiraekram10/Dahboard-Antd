import React from 'react';
import { Line } from '@ant-design/charts';

const DemoLine = () => {
  // Data for two lines
  const data = [
    { year: 'jan', value: 60, category: 'Line A' },
    { year: 'feb', value: 100, category: 'Line A' },
    { year: 'march', value: 150, category: 'Line A' },
    { year: 'april', value: 200, category: 'Line A' },
    { year: 'may', value: 250, category: 'Line A' },
    { year: 'jun', value: 300, category: 'Line A' },
    { year: 'jul', value: 250, category: 'Line A' },
    { year: 'aug', value: 250, category: 'Line A' },
    { year: 'sept', value: 250, category: 'Line A' },
    { year: 'oct', value: 300, category: 'Line A' },
    { year: 'nov', value: 300, category: 'Line A' },
    { year: 'dec', value: 300, category: 'Line A' },

    { year: 'jan', value: 0, category: 'Line B' },
    { year: 'feb', value: 80, category: 'Line B' },
    { year: 'march', value: 120, category: 'Line B' },
    { year: 'april', value: 180, category: 'Line B' },
    { year: 'may', value: 200, category: 'Line B' },
    { year: 'jun', value: 200, category: 'Line B' },
    { year: 'jul', value: 250, category: 'Line B' },
    { year: 'aug', value: 300, category: 'Line B' },
    { year: 'sept', value: 300, category: 'Line B' },
    { year: 'oct', value: 300, category: 'Line B' },
    { year: 'nov', value: 300, category: 'Line B' },
    { year: 'dec', value: 300, category: 'Line B' },
  ];

  // Chart configuration
  const config = {
    data,
    xField: 'year', // X-axis field
    yField: 'value', // Y-axis field
    seriesField: 'category', // Field to differentiate the lines
    smooth: true, // Makes the lines smooth
    height: 400,
    point: {
      size: 6, // Size of the data points
      shape: 'circle', // Shape of the data points
      
    },
    tooltip: {
      shared: true, // Show all line data in one tooltip
      showMarkers: true, // Display markers in the tooltip
     
    },
    legend: {
      position: 'top', // Position of the legend
    },
    color: ['#29cae4', '#dddd'], // Custom colors for the two lines
    yAxis: {
      // Custom Y-axis labels
      tickValues: [0, 60, 120, 180, 240, 300], // Explicit tick values for Y-axis
      label: {
        formatter: (value) => `$${value}`, // Add $ symbol to each tick value
      },
    },
    xAxis: {
      label: {
        formatter: (text) => text.charAt(0).toUpperCase() + text.slice(1), // Capitalize month names
      },
    },
  };

  return <Line  {...config} />;
};

export default DemoLine;
