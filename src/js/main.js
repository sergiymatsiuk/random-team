const inputs = document.getElementsByClassName('form-control')

function addIdToInput () {
  let count = 1
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].id = count
    count++
  }
}

document.addEventListener('click', () => {
  addIdToInput()
})
