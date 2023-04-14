function getRandomInt() {
  return Math.floor(Math.random() * (100 - 5 + 1)) + 5
}

export const data = {
    labels: ['2012','2013', '2014', '2015', '2016', '2017', '2018', '2019' ,'2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Yearly Sales',
        backgroundColor: '#0036fa',
        data: [getRandomInt(),
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