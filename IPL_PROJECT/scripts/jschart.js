// JS 
var chart = JSC.chart('chartDiv', { 
    title_label_text: 'Stock values of respective companies over 10 years',
    annotations: [{
        label_text: 'Source: Imaginary',
        position: 'bottom left'
    }],
    debug: true, 
    type: 'line', 
    legend: { 
      template: '%icon %name', 
      position: 'right top'
    }, 
    defaultPoint_marker_type: 'none', 
    xAxis_crosshair_enabled: true, 
    yAxis_formatString: 'c', 
    series: [ 
      { 
        name: 'Apple', 
        points: [ 
          [new Date(2010, 0, 1), 60.26], 
          [new Date(2011, 0, 1), 89.66], 
          [new Date(2012, 0, 1), 102.20], 
          [new Date(2013, 0, 1), 163.93], 
          [new Date(2014, 0, 1), 196.70], 
          [new Date(2015, 0, 1), 189.69], 
          [new Date(2016, 0, 1), 270.59], 
          [new Date(2017, 0, 1), 420.47], 
          [new Date(2018, 0, 1), 390.12], 
          [new Date(2019, 0, 1), 504.82], 
          [new Date(2020, 0, 1), 653.00]    
        ] 
      },{ 
        name: 'Microsoft', 
        points: [ 
          [new Date(2010, 0, 1), 80.32], 
          [new Date(2011, 0, 1), 200.56], 
          [new Date(2012, 0, 1), 267.78], 
          [new Date(2013, 0, 1), 386.09], 
          [new Date(2014, 0, 1), 472.88], 
          [new Date(2015, 0, 1), 543.41], 
          [new Date(2016, 0, 1), 607.11], 
          [new Date(2017, 0, 1), 558.60], 
          [new Date(2018, 0, 1), 753.00], 
          [new Date(2019, 0, 1), 789.81], 
          [new Date(2020, 0, 1), 802.51] 
        ] 
      },{ 
        name: 'Google', 
        points: [ 
          [new Date(2010, 0, 1), 123.42], 
          [new Date(2011, 0, 1), 298.88], 
          [new Date(2012, 0, 1), 363.19], 
          [new Date(2013, 0, 1), 529.77], 
          [new Date(2014, 0, 1), 537.42], 
          [new Date(2015, 0, 1), 711.06], 
          [new Date(2016, 0, 1), 757.44], 
          [new Date(2017, 0, 1), 715.80], 
          [new Date(2018, 0, 1), 823.10], 
          [new Date(2019, 0, 1), 759.00], 
          [new Date(2020, 0, 1), 874.40]        
        ] 
      },{ 
        name: 'Tesla', 
        points: [ 
          [new Date(2010, 0, 1), 52.45], 
          [new Date(2011, 0, 1), 59.20], 
          [new Date(2012, 0, 1), 67.37], 
          [new Date(2013, 0, 1), 100.59], 
          [new Date(2014, 0, 1), 142.76], 
          [new Date(2015, 0, 1), 157.47], 
          [new Date(2016, 0, 1), 120.75], 
          [new Date(2017, 0, 1), 270.73], 
          [new Date(2018, 0, 1), 320.86], 
          [new Date(2019, 0, 1), 625.68], 
          [new Date(2020, 0, 1), 942.22]       
        ] 
      }
    ] 
  }); 