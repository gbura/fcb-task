export default function () {
  const cardNumberInput = document.getElementById('card__form--number')
  const cardNameInput = document.getElementById('card__form--name')
  const monthSelect = document.querySelectorAll('#card__form--select')[0]
  const yearSelect = document.querySelectorAll('#card__form--select')[1]
  const cvvInput = document.querySelector('.card__form--input-cvv')

  const cardNumberPreview = document.querySelector('.card__preview--number')
  const cardHolderPreview = document.querySelector('.card__preview--holder')
  const cardExpiresPreview = document.querySelector('.card__preview--expires')
  const cardCvvPreview = document.querySelector('.back__line--cvv')

  const cardType = document.querySelector('.card__preview--card-type')

  function formatCardNumber(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim()
  }

  function updateCardType(cardNumber) {
    const cardImage = cardNumber.startsWith('5') ? "url('../../images/mastercard.png')" : "url('../../images/visa.png')"
    cardType.style.backgroundImage = cardImage
    document.querySelector('.back .card__preview--card-type').style.backgroundImage = cardImage
  }

  cardNumberInput.addEventListener('input', function () {
    const formattedNumber = formatCardNumber(this.value)
    cardNumberPreview.textContent = formattedNumber || 'XXXX XXXX XXXX XXXX'

    updateCardType(this.value.replace(/\s/g, ''))
  })

  cardNameInput.addEventListener('input', function () {
    cardHolderPreview.textContent = this.value.toUpperCase() || 'JAN KOWALSKI'
  })

  monthSelect.addEventListener('change', updateExpiryDate)
  yearSelect.addEventListener('change', updateExpiryDate)

  function updateExpiryDate() {
    const month = monthSelect.value || 'MM'
    const year = yearSelect.value ? yearSelect.value.slice(-2) : 'YY'
    cardExpiresPreview.textContent = `${month}/${year}`
  }

  cvvInput.addEventListener('focus', function () {
    document.querySelector('.card__preview').classList.add('flip')
    cvvInput.addEventListener('input', function () {
      cardCvvPreview.textContent = `CVV: ${cvvInput.value}`
    })
  })

  cvvInput.addEventListener('blur', function () {
    document.querySelector('.card__preview').classList.remove('flip')
  })
}
