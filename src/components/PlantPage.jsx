import React from "react";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";
import PlantList from "./PlantList";

function PlantPage({ plants, onAddPlant, searchTerm, setSearchTerm }) {
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
