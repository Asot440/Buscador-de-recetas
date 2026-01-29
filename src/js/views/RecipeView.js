//import { recipeContainer } from '../controller.js';
//import {renderSpinner} from '../controller.js';
import icons from '../../img/icons.svg';
//import { Fraction } from 'fractional';

class RecipeView {
    #parentElement = document.querySelector('.recipe');
    #data;
    render(data) {
        this.#data = data;
        const markup = this.#generateMarkup();
        this.#clear();
        this.#parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    #clear() {
        this.#parentElement.innerHTML = '';
    }
    #generateMarkup() {
    return `
        <figure class="recipe__fig">
        <img src="${this.#data.image_url}" alt="${this.#data.title}" class="recipe__img" />
        <h1 class="recipe__title">
        <span>${this.#data.title}</span>
        </h1>
        </figure>

        <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
        ${this.#data.ingredients.map(this._renderIngredient).join('')}
        </ul>
        </div>
    `;
}
    _renderIngredient(ing) {
    return `
        <li class="recipe__ingredient">
        <svg class="recipe__icon">
        <use href="${icons}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${ing.quantity ?? ''}</div>
        <div class="recipe__description">
        <span class="recipe__unit">${ing.unit}</span>
        ${ing.description}
        </div>
        </li>
    `;
}

    renderSpinner() {
    const markup = `
    <div class="spinner">
        <svg>
        <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;
    this.#parentElement.innerHTML = '';
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
}

}
export default new RecipeView();
