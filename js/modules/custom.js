export default function () {
  const cardNumber = document.getElementById('card__form--number')
  const cardName = document.getElementById('card__form--name')
  
  function getName() {
    const nameInput = document.getElementById('card__form--name')
  }

  function submitData(e) {
    e.preventDefault()
  }
  getName()

  window.addEventListener('click', submitData())
}
