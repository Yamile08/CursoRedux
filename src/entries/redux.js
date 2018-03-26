import { createStore } from 'redux';  //importando el store

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');
  console.log(title);
  store.dispatch({  //dispatch es un metodo de store que recibe nuestra accion
    type: 'ADD_SONG', //type es lo unico obligatorio que recibiria nuestra accion y tenemos que mandarle un string que funcione como una
                      // constante, en este caso ugregar una cancion
    payload: {
      title,
    }
  })
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

const $container = document.getElementById('playlist');
const playlist = store.getState();
playlist.forEach((item) => {
  const template = document.createElement('p');
  template.textContent = item.title;
  $container.appendChild(template);
})

console.log(store.getState())
