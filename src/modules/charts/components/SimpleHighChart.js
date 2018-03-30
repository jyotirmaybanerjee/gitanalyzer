import React from 'react';
import ReactHighcharts from 'react-highcharts';

const config = {
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4],
    }, {
        data: [42.9, 175.5, 112.4, 134.2, 154.0, 186.0, 140.6, 158.5, 236.4, 205.1, 295.6, 854.4],
    }],
  };

  export default () => <ReactHighcharts config={config} />
