const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

// -- registro em memória --
button.addEventListener('click', add) // -- registro em memória com evento de click --
form.addEventListener('change', saved) // -- registro em memória com uma alterção change --

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  
  if(dayExists) {
    alert('🔴❫ O adicionamento já foi incluso!')
    return
  }

  alert('🟢❫ Dia adicionado com sucesso!')
  nlwSetup.addDay(today)
}

function saved() {
  localStorage.setItem('NLWSetup@habtis', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habtis')) || {}
nlwSetup.setData(data)
nlwSetup.load()