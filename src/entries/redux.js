import { createStore } from 'redux';  //importando el store

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');
  console.log(title);
}
const initialState = [
  {
    "title": "Despacito",
  },
  {
    "title": "One more time",
  },
  {
    "title": "Echame la culpa",
  }
]



const store = createStore( //tres paramentros que recibe el Store
  (state) => state,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
