function getRandomInt() {
  return Math.floor(Math.random() * (100 - 5 + 1)) + 5
}

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
        data: [getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),getRandomInt(),
          getRandomInt(),
          getRandomInt(),]
      },
      {
        label: 'Montly Revenue',
        backgroundColor: 'rgba(252, 96, 88,0.4)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),]
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }
  