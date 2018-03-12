import React, { Component } from 'react';
import NegativeCharts from 'react-highcharts';


const config = {
    chart: {
        type: 'bar',
        backgroundColor:'rgba(255, 255, 255, 0.0)',
        height: 50,
        width: 150
    },
    
    title: {
        text: false
    },

    credits: {
        enabled: false
    },

    xAxis: {
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        labels: {
            enabled: false
        },
        minorTickLength: 0,
        tickLength: 0
     },

    yAxis: {
        gridLineColor: 'transparent',
        labels: {
            enabled: false
        },
        title: {
            text: null
        },
    },
    
    plotOptions: {
        series: {
            stacking: 'normal',
            colorByPoint: true
        }
    },

    legend: {
        enabled: false
    },
    
    series: [{
        name: 'Male',
        data: [-0.5],
        colors: ['indigo'],
    }, {
        name: 'Female',
        data: [0.3],
        colors: ['red'],
    }]
};

class NegativeHighCharts extends Component {
  render() {
    return (
        <NegativeCharts config = {config}></NegativeCharts>
    );
  }
}

export default NegativeHighCharts;
