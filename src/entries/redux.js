import { createStore } from 'redux';  //importando el store

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData($form); //Tomar los datos del formulario, FormData ess una clase por lo tanto hay qu instanciarla, sabes que es una clase cuando arranca en mayusculas
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
      return [...state, action.payload]//descompone el estado y le agrega uno nuev agregandole una nueva cancion
    default:
      return state //si me llega una accion que estoy manejando  en este caso agregar cancion entonces me retorna un nuevo estado
  }
}


const store = createStore( //tres paramentros que recibe el Store
  reducer, //Función pura que retorna el próximo estado.
  initialState, //Es el estado inicial de la aplicación, la primera carga, el llamado a una data. Puede ser cualquier tipo de dato.
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), //enhancer Función que puede extender redux con capacidades añadidas por librerías externas. Es opcional. Eg. Añadir las dev-tools
)

function render() {
  const $container = document.getElementById('playlist');
  const playlist = store.getState();
  $container.innerHTML = ''; //Borrar todo lo que halla dentro del contenedor antes de que se itere, para no repetir los items anteriores cuando se este agregando un nuevo item
  playlist.forEach((item) => { //Hacer una iteracion por cada elemento
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
