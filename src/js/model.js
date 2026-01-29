export const state = {
    recipe: {}
};

// No estoy seguro si esta funcion va aquí o en el controller.js
export async function loadRecipe(id) {
    try {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
        if (!res.ok) throw new Error(`Error ${res.status}: no se pudo obtener la receta`);
        const data = await res.json();
        const recipe = {id: data.data.recipe.id,
        title: data.data.recipe.title,
        publisher: data.data.recipe.publisher,
        source_url: data.data.recipe.source_url,
        image_url: data.data.recipe.image_url,
        servings: data.data.recipe.servings,
        cooking_time: data.data.recipe.cooking_time,
        ingredients: data.data.recipe.ingredients,
        };
        
        state.recipe = recipe;
    }
    catch (err) {
        console.error(`${err} 💥💥💥`);
        throw err;
    }
}