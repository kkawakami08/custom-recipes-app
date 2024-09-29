import nutritionixAPI from "../api/nutritionix";

export const searchFood = async (query) => {
  try {
    const res = await nutritionixAPI.get("/search/instant", {
      params: { query },
    });
    return res.data;
  } catch (error) {
    throw new Error("Item not found!");
  }
};

export const getNutritionInfo = async (foodName) => {
  try {
    const res = await nutritionixAPI.post("/natural/nutrients", {
      query: foodName,
    });
    return res.data.foods[0];
  } catch (error) {
    throw new Error("Couldn't get nutrition info");
  }
};
