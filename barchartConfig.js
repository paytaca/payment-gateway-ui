function getRandomInt() {
  return Math.floor(Math.random() * (100 - 5 + 1)) + 5
}

export const data = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    datasets: [
      {
        label: 'Monthly Sales',
        backgroundColor: '#05fa4e',
        data: [ getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
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
  