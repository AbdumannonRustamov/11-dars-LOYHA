import { useState, useEffect } from "react";

function Create() {
  const [title, setTitle] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [anotherTitle, setAnotherTitle] = useState("");
  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem("recipes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const handleAdd = () => {
    if (!title || !cookingTime || !ingredients || !anotherTitle) return;

    const newRecipe = {
      title,
      cookingTime,
      ingredients,
      anotherTitle,
    };

    setRecipes([...recipes, newRecipe]);

    // inputlarni tozalash
    setTitle("");
    setCookingTime("");
    setIngredients("");
    setAnotherTitle("");
  };

  return (
    <div className="ml-40 mt-8">
      <h1 className="font-bold text-2xl mb-6">Create New Recepies</h1>

      <div className="w-180 opacity-50 h-auto border-1 rounded-2xl p-6 mb-10 bg-base-200">
        <p className="font-black">Title</p>
        <input
          type="text"
          placeholder="Type here"
          className="input w-full mt-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <p className="font-black mt-4">Cooking Time</p>
        <input
          type="text"
          placeholder="Type here"
          className="input w-full mt-2"
          value={cookingTime}
          onChange={(e) => setCookingTime(e.target.value)}
        />

        <p className="font-black mt-4">Ingredients</p>
        <input
          type="text"
          placeholder="Type here"
          className="input w-full mt-2"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />

        <p className="font-black mt-4">Another Title</p>
        <input
          type="text"
          placeholder="Type here"
          className="input w-full mt-2"
          value={anotherTitle}
          onChange={(e) => setAnotherTitle(e.target.value)}
        />

        <button
          className="btn btn-outline btn-accent rounded-xl mt-4"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      {/* Kartlar shu joyning o'zida chiqadi */}
      {recipes.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="card w-64 bg-base-100 shadow-xl border p-4 rounded-xl"
            >
              <h2 className="font-bold text-lg mb-2">{recipe.title}</h2>
              <p>
                <strong>Cooking Time:</strong> {recipe.cookingTime}
              </p>
              <p>
                <strong>Ingredients:</strong> {recipe.ingredients}
              </p>
              <p>
                <strong>Another Title:</strong> {recipe.anotherTitle}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Create;
