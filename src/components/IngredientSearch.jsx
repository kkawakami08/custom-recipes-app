import React, { useState } from "react";
import { searchFood, getNutritionInfo } from "../utils/nutritionHelpers";

const IngredientSearch = () => {
  const [query, setQuery] = useState("");
  const [foodData, setFoodData] = useState(null);
  const [nutritionData, setNutritionData] = useState(null);
  console.log("hi");
  // Function to handle search
  const handleSearch = async () => {
    try {
      const data = await searchFood(query);
      setFoodData(data);
      setNutritionData(null); // Clear previous data
    } catch (error) {
      console.log("Error searching");
    }
  };

  // Function to get nutritional info
  const handleNutrition = async (foodName) => {
    try {
      const data = await getNutritionInfo(foodName);
      setNutritionData(data);
    } catch (error) {
      console.log("Error getting nutrition");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  console.log(foodData);
  // console.log(nutritionData);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter food name or brand..."
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>

      {foodData && (
        <div>
          <h2>Results:</h2>
          <ul>
            {foodData.branded.map((item, index) => (
              <li key={index}>
                <strong>{item.food_name}</strong> -{" "}
                {item.brand_name ? item.brand_name : "Common food"}
                <button onClick={() => handleNutrition(item.food_name)}>
                  Get Nutrition Info
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {nutritionData && (
        <div>
          <h2>Nutrition Information:</h2>
          <p>
            <strong>Calories:</strong> {nutritionData.nf_calories} kcal
          </p>
          <p>
            <strong>Protein:</strong> {nutritionData.nf_protein} g
          </p>
          <p>
            <strong>Carbs:</strong> {nutritionData.nf_total_carbohydrate} g
          </p>
          <p>
            <strong>Fat:</strong> {nutritionData.nf_total_fat} g
          </p>
          <p>
            <strong>Serving Size:</strong> {nutritionData.serving_weight_grams}g
          </p>
        </div>
      )}
    </div>
  );
};

export default IngredientSearch;
