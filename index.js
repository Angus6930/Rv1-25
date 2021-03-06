function generateRandomNumber() {
  $('#output').html('')
  const max = 19
  const min = 1
  const numbers = []
  let randomNum = -1
  while (numbers.length < 18) {
    randomNum = Math.floor(Math.random() * (max - min) + min)
    if (!numbers.includes(randomNum)) {
      numbers.push(randomNum)
      $('#output').append(`<li>${randomNum}</li>`)
    }
  }
}

$(() => {
  $('#randomBtn').click(generateRandomNumber)
})
