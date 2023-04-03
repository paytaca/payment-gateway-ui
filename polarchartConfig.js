export const data = {
    labels: [
      'Sales',
      'Stakes',
      'Earned',
      'Loss',
      'Invest',
      'Pocket',
      'Time'
    ],
    datasets: [
      {
        label: 'Total Sales',
        backgroundColor: 'rgba(252, 96, 88,0.4)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
        label: 'Montly Revenue',
        backgroundColor: 'rgba(252, 96, 88,0.4)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [28, 48, 40, 19, 96, 27, 100]
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }
  