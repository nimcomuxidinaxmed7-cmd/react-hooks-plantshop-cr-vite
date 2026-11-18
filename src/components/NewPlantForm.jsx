import React from "react";

function NewPlantForm({ onAddPlant }) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const newPlant = {
      name: form.elements.name.value,
      image: form.elements.image.value,
      price: form.elements.price.value,
    };

    try {
      const response = await fetch("http://localhost:6001/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlant),
      });

      const savedPlant = await response.json();

      onAddPlant(savedPlant);
      form.reset();
    } catch (error) {
      console.error("Error adding plant:", error);
    }
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" required />
        <input type="text" name="image" placeholder="Image URL" required />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          required
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;