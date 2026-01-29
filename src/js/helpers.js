export async function getJSON(url) {
    try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) throw new Error(`Error ${res.status}: no se pudo obtener la receta`);
    return data;
    } catch (err) {
        throw err;
    }
}

