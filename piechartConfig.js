function getRandomInt() {
  return Math.floor(Math.random() * (100 - 5 + 1)) + 5
}

export const data = {
    labels: ['Earned', 'Invested', 'Total Sales', 'Loss'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          ]
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }
  