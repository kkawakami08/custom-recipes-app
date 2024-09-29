import { useState, useEffect } from "react";
import IngredientSearch from "./components/IngredientSearch";

const App = () => {
  const [name, setName] = useState(() => {
    return localStorage.getItem("name") || "";
  });

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <div>
      <IngredientSearch />
    </div>
  );
};

export default App;
