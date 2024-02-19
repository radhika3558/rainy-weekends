var radarCanvas = document.getElementById("myradarchart");

/* data */
var radar_data = {
    labels: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    datasets: [{
      label: 'New York',
      data: [15, 14, 11, 8, 8, 16, 12],
      fill: true,
      backgroundColor: 'rgba(153, 102, 255, 0.2)', // Purple
      borderColor: 'rgb(153, 102, 255)',
      pointBackgroundColor: 'rgb(153, 102, 255)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(153, 102, 255)',
      pointStyle: ['rectRounded', 'circle', 'circle', 'circle', 'circle', 'circle', 'rectRounded'], // More distinct for weekend
      pointRadius: [7, 3, 3, 3, 3, 3, 7], // Larger points for weekend
      pointBorderWidth: [2, 1, 1, 1, 1, 1, 2] // Thicker border for weekend
    }, {
      label: 'Seattle',
      data: [18,18,13,9,10,15,11],
      fill: true,
      backgroundColor: 'rgba(128, 0, 128, 0.2)', // Darker Purple
      borderColor: 'rgb(128, 0, 128)',
      pointBackgroundColor: 'rgb(128, 0, 128)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(128, 0, 128)',
      pointStyle: ['rectRounded', 'circle', 'circle', 'circle', 'circle', 'circle', 'rectRounded'], // More distinct for weekend
      pointRadius: [7, 3, 3, 3, 3, 3, 7], // Larger points for weekend
      pointBorderWidth: [2, 1, 1, 1, 1, 1, 2] // Thicker border for weekend
    },{
        label: 'New Orleans',
        data: [8, 5, 8, 4, 8, 5, 12],
        fill: true,
        backgroundColor: 'rgba(75, 0, 130, 0.2)', // Indigo
        borderColor: 'rgb(75, 0, 130)',
        pointBackgroundColor: 'rgb(75, 0, 130)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(75, 0, 130)',
        pointStyle: ['rectRounded', 'circle', 'circle', 'circle', 'circle', 'circle', 'rectRounded'], // More distinct for weekend
        pointRadius: [7, 3, 3, 3, 3, 3, 7], // Larger points for weekend
        pointBorderWidth: [2, 1, 1, 1, 1, 1, 2] // Thicker border for weekend
      },{
        label: 'Fort Lauderdale',
        data: [16, 12, 14, 12, 13, 13, 15],
        fill: true,
        backgroundColor: 'rgba(218, 112, 214, 0.2)', // Orchid
        borderColor: 'rgb(218, 112, 214)',
        pointBackgroundColor: 'rgb(218, 112, 214)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(218, 112, 214)',
        pointStyle: ['rectRounded', 'circle', 'circle', 'circle', 'circle', 'circle', 'rectRounded'], // More distinct for weekend
        pointRadius: [7, 3, 3, 3, 3, 3, 7], // Larger points for weekend
        pointBorderWidth: [2, 1, 1, 1, 1, 1, 2] // Thicker border for weekend
      }
]
};

var myradarchart = new Chart(radarCanvas,{
    type: 'radar',
    data: radar_data,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      },
      scales: {
        r: {
          angleLines: {
            display: false
          },
          suggestedMin: 0,
          suggestedMax: 20
        }
      }
    },
  });
