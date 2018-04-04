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

const initialState = [  //el estado inicial va a ser una lista de objetos
  {
    "title": "Despacito", //objeto 1
  },
  {
    "title": "One more time", //objeto 2
  },
  {
    "title": "Echame la culpa", //objeto 3
  }
]

const reducer = function(state, action) { //Devuelve el siguiente estado 
  switch (action.type) {
    case 'ADD_SONG': //Agrega una nueva cancion
      return [...state, action.payload]
    default:
      return state
  }
}


const store = createStore( //tres paramentros que recibe el Store
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), //enhancer
)

function render() {
  const $container = document.getElementById('playlist');
  const playlist = store.getState();
  $container.innerHTML = ''; //Borrar todo lo que halla dentro del contenedor antes de que se itere, para no repetir los items anteriores cuando se este agregando un nuevo item
  playlist.forEach((item) => {
    const template = document.createElement('p');
    template.textContent = item.title;
    $container.appendChild(template);
  })
}
render();

function handleChange() {
  render();
}

store.subscribe(handleChange)

// console.log(store.getState())
