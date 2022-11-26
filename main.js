const filterElement = document.querySelector('header input')
const cards = document.querySelectorAll('.cards li')

filterElement.addEventListener('input', filterCards)

function changeDisplayElement (el, display) {
  el.style.display = display
}

function filterCards(){
  if(filterElement.value != ''){
    for (const card of cards) {
      let title = card.querySelector('h2')
      title = title.textContent.toLowerCase();
      let filterText = filterElement.value.toLowerCase();
      if(!title.includes(filterText)){
        changeDisplayElement(card, 'none')
      }
      else {
        changeDisplayElement(card, 'block')
      }
    }
  }
  else {
    for (const card of cards) { 
      changeDisplayElement(card, 'block')
    }
  }
}