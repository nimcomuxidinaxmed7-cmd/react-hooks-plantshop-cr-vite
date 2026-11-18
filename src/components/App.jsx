import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const addedPlants = useRef([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        setPlants([...data, ...addedPlants.current]);
      })
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  function handleAddPlant(newPlant) {
    addedPlants.current.push(newPlant);
    setPlants((currentPlants) => [...currentPlants, newPlant]);
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={filteredPlants}
        onAddPlant={handleAddPlant}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}

export default App;
