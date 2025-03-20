import React, { useState, useEffect } from "react";

export default function Main() {
    const [ingredients, setIngredients] = useState([]);

    function addIngredient(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const ingredient = formData.get("ingredient").trim();

        if (ingredient !== "") {
            setIngredients(prevIngredients => {
                const updatedIngredients = [...prevIngredients, ingredient];
                console.log("Updated Ingredients:", updatedIngredients); // ✅ Logs Correctly
                return updatedIngredients;
            });
        }

        event.target.reset();
    }

    useEffect(() => {
        console.log("Current state of ingredients:", ingredients);
    }, [ingredients]);

    return (
        <main>
            <form onSubmit={addIngredient} className="form-main">
                <input
                    type="text"
                    name="ingredient"
                    placeholder="Enter Ingredients"
                    className="form-input"
                />
                <button className="form-button" type="submit">
                    + Add Ingredient
                </button>
            </form>
            <h2 className="form-text">Ingredients List:</h2>
            {ingredients.length === 0 ? <p>No ingredients added yet.</p> : null}

            {/* Conditional Rendering for .form-list */}
            {ingredients.length > 0 && (
                <ol className="form-list">
                    {ingredients.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            )}
        </main>
    );
}
