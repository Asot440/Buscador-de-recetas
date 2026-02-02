let e="https://forkify-api.herokuapp.com/api/v2/recipes/";async function r(e){try{let r=fetch(e),s=await Promise.race([r,t(5)]),i=await s.json();if(!s.ok)throw Error(`Error ${s.status}: no se pudo obtener la receta`);return i}catch(e){throw e}}let t=function(e){return new Promise((r,t)=>setTimeout(()=>t(Error(`Request took too long! Timeout after ${e} second${e>1?"s":""}`)),1e3*e))},s={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10}};async function i(t){try{let i=await r(`${e}${t}`);s.recipe={id:i.data.recipe.id,title:i.data.recipe.title,publisher:i.data.recipe.publisher,source_url:i.data.recipe.source_url,image_url:i.data.recipe.image_url,servings:i.data.recipe.servings,cooking_time:i.data.recipe.cooking_time,ingredients:i.data.recipe.ingredients,search:{query:"",results:[]}}}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}}async function n(t){try{s.search.query=t;let i=await r(`${e}/?search=${t}`);s.search.results=i.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image_url:e.image_url}))}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}}function a(e=s.search.page){s.search.page=e;let r=(e-1)*s.search.resultsPerPage,t=e*s.search.resultsPerPage;return s.search.results.slice(r,t)}var c={};function l(e,r,t,s,i){var n,a,c,l;let o=[2,3,5];if(!0===i)for(let r=3;r*r<=e;r+=2)e%r==0&&o.push(r);let u=0,d=e,p=r;for(;u<=o.length;)d%o[u]==0&&p%o[u]==0?(o[u],d/=o[u],p/=o[u]):u++;return n=p,a=d,c=t,l=s,1===n&&1===a?(c=`${l}${(parseInt(c)+1).toString()}`,`${c}`):0===a?`${l}${c}`:"0"==c?`${l}${a}/${n}`:`${l}${c} ${a}/${n}`}c=function(e){var r,t,s,i,n,a,c,o;let u,d;if(e<0?(e=Math.abs(e),u="-"):u="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${u}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${u}${e}`;if(e<1e-6)return"0";let p=e.toString(),h=p.split("."),_=h[0];if("0"==d&&"0"!==_)return _;if("0"==d&&"0"==_)return"0";if("99"==(d=p.length>=17?h[1].slice(0,h[1].length-1):h[1])&&"0"!==_)return`${_} 99/100`;if("99"==d&&"0"==_)return"99/100";if(1-parseFloat(`.${d}`)<.0011&&(d="999"),void 0==d)return _;let g=d.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!g||!(d.length>2)){return r=d,t=_,s=u,l(parseInt(r,10),Math.pow(10,r.length),t,s,!1)}{let e,r,t,s,p=g[0].split("").reverse().join(""),h=g[1].split("").reverse().join("");if(h.length>1){let e=h.split(""),r=1;for(let t=0;t<e.length;t++)r/=e[0]/e[t];1===r&&(h=e[0])}return h.length>1&&h.length%2==0&&(h=parseInt(h.slice(0,h.length/2),10)-parseInt(h.slice(h.length/2,h.length),10)==0?h.slice(0,h.length/2):h),i=d,n=h,a=p,c=_,o=u,r=Math.pow(10,e=i.length-a.length>=1?i.length-a.length:1),l(Math.round(((t=parseFloat(`0.${i}`))*(s=Math.pow(10,n.length))-t)*Math.pow(10,e)),(s-1)*r,c,o,!0)}};let o="/icons.svg";class u{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
        <div class="spinner">
            <svg>
            <use href="${o}#icon-loader"></use>
            </svg>
        </div>
        `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let r=`<div class="error">
            <div>
            <svg>
                <use href="${o}#icon-alert-triangle"></use>
            </svg>
            </div>
            <p>${e}</p>
            </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(e=this._message){let r=`<div class="error">
        <div>
        <svg>
            <use href="${o}#icon-smile"></use>
        </svg>
        </div>
        <p>${e}</p>
        </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}let d="/icons.svg";class p extends u{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";_data;render(e){this._data=e;let r=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_clear(){this._parentElement.innerHTML=""}_generateMarkup(){return`
        <figure class="recipe__fig">
        <img src="${this._data.image_url}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
        <span>${this._data.title}</span>
        </h1>
        </figure>

        <div class="recipe__details">
        <div class="recipe__info">
            <svg class="recipe__info-icon">
            <use href="${d}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cooking_time}</span>
            <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
            <svg class="recipe__info-icon">
            <use href="${d}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
                <svg>
                <use href="${d}#icon-minus-circle"></use>
                </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
                <svg>
                <use href="${d}#icon-plus-circle"></use>
                </svg>
            </button>
            </div>
        </div>

        <div class="recipe__user-generated">
            <svg>
            <use href="${d}#icon-user"></use>
            </svg>
        </div>
        <button class="btn--round">
            <svg class="">
            <use href="${d}#icon-bookmark-fill"></use>
            </svg>
        </button>
        </div>

        <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
        ${this._data.ingredients.map(this._renderIngredient).join("")}
        </ul>
        </div>

        <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
        </p>
        <a
            class="btn--small recipe__btn"
            href="${this._data.source_url}"
            target="_blank"
        >
            <span>Directions</span>
            <svg class="search__icon">
            <use href="${d}#icon-arrow-right"></use>
            </svg>
        </a>
        </div>

    `}_renderIngredient(e){var r;return`
        <li class="recipe__ingredient">
        <svg class="recipe__icon">
        <use href="${d}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${e.quantity?((r=c)&&r.__esModule?r.default:r)(e.quantity):""}</div>
        <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
        </div>
        </li>
    `}renderSpinner(){let e=`
    <div class="spinner">
        <svg>
        <use href="${d}#icon-loader"></use>
        </svg>
    </div>
    `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)}addHandlerRender(e){["hashchange","load"].forEach(r=>window.addEventListener(r,e))}renderError(e=this._errorMessage){let r=`<div class="error">
        <div>
        <svg>
            <use href="${d}#icon-alert-triangle"></use>
        </svg>
        </div>
        <p>${e}</p>
        </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(e=this._message){let r=`<div class="error">
        <div>
        <svg>
            <use href="${d}#icon-smile"></use>
        </svg>
        </div>
        <p>${e}</p>
        </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}var h=new p;class _{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._cleanInput(),e}addEventListener(e){this._parentEl.addEventListener("click",function(r){r.preventDefault(),e()})}addhandlerSearch(e){this._parentEl.addEventListener("submit",function(r){r.preventDefault(),e()})}_cleanInput(){this._parentEl.querySelector(".search__field").value=""}}var g=new _;class v extends u{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again.";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){return`
        <li class="preview">
        <a class="preview__link" href="#${e.id}">
            <figure class="preview__fig">
            <img src="${e.image_url}" alt="Test" />
            </figure>
            <div class="preview__data">
            <h4 class="preview__title">${e.title}</h4>
            <p class="preview__publisher">${e.publisher}</p>
            <div class="preview__user-generated">
                <svg>
                <use href="/icons.svg#icon-user"></use>
                </svg>
            </div>
            </div>
        </a>
        </li>`}}var f=new v;let $="/icons.svg";class m extends u{_parentElement=document.querySelector(".pagination");_addHandlerClick(e){this._parentElement.addEventListener("click",function(r){let t=r.target.closest(".btn--inline");t&&e(+t.dataset.goto)})}_generateMarkup(){let e=this._data.page,r=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&r>1?`
            <button class="btn--inline pagination__btn--next" data-goto="${e+1}">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
            <use href="${$}#icon-arrow-right"></use>
            </svg>
            </button>
        `:e===r&&r>1?`
            <button class="btn--inline pagination__btn--prev" data-goto="${e-1}">
            <svg class="search__icon">
            <use href="${$}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
            </button>
        `:e>1&&e<r?`
            <button class="btn--inline pagination__btn--prev" data-goto="${e-1}">
            <svg class="search__icon">
            <use href="${$}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
            </button>
            <button class="btn--inline pagination__btn--next" data-goto="${e+1}">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
            <use href="${$}#icon-arrow-right"></use>
            </svg>
            </button>
        `:""}}var b=new m;async function w(){try{let e=window.location.hash.slice(1);if(!e)return;h.renderSpinner(),await i(e),h.render(s.recipe)}catch(e){throw h.renderError(),e}}async function y(e){try{if(!(e=g.getQuery()))return;await n(e),console.log(s.search.results),f.renderSpinner(s.search.results),f.render(a()),b.render(s.search)}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}}h.addHandlerRender(w),g.addhandlerSearch(y),b._addHandlerClick(function(e){f.render(a(e)),b.render(s.search)});
//# sourceMappingURL=Buscador-de-recetas.a2aeb947.js.map
