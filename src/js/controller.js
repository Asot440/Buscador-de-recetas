import * as model from './model.js';
import RecipeView from './views/RecipeView.js';
//export const recipeContainer = document.querySelector('.recipe');
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

//Esto al parecer ya no se usa, mas adelante lo comento para hacer pruebas.
/*function renderSpinner(parentEl) {
  const markup = `<div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div> -->

        <!-- <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>No recipes found for your query. Please try again!</p>
          </div>`;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
}//Hasta aqui*/

async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    RecipeView.renderSpinner();
    await model.loadRecipe(id);
    RecipeView.render(model.state.recipe);
  }

  catch (err) {
    console.error(`${err} !!!!`);
  }

}

const eventos = ['hashchange', 'load'];
eventos.forEach(ev => window.addEventListener(ev, controlRecipes));