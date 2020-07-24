import React, { useState } from "react";

export default function From() {
  const defaultValues = {
    name: "",
    pizzaSize: "",
    pepperoni: false,
    pineapple: false,
    mushroom: false,
    extraCheese: false,
    specialInstructions: "",
  };

  const [formState, setFormState] = useState(defaultValues);

  const handleChange = (e) => {
    const value =
      e.target.type == "checkbox" ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
    console.log("formState: ", formState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Form Page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <br />
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label htmlFor="pizzaSize">
          Pizza Size:
          <br />
          <select
            name="pizzaSize"
            value={formState.pizzaSize}
            onChange={handleChange}
          >
            <option value="">--Select--</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <br />
        <br />
        <label htmlFor="toppings">
          Toppings:
          <br />
          <div className="toppings-wrapper">
            <label htmlFor="pepperoni">
              Pepperoni
              <input
                type="checkbox"
                name="pepperoni"
                onChange={handleChange}
                value={formState.pepperoni}
              />
            </label>
            {/*  */}
            <label htmlFor="pineapple">
              Pineapple
              <input
                type="checkbox"
                name="pineapple"
                onChange={handleChange}
                value={formState.pineapple}
              />
            </label>

            {/*  */}
            <label htmlFor="mushroom">
              Mushroom
              <input
                type="checkbox"
                name="mushroom"
                onChange={handleChange}
                value={formState.mushroom}
              />
            </label>
            {/* */}
            <label htmlFor="extraCheese">
              Extra Cheese
              <input
                type="checkbox"
                name="extraCheese"
                onChange={handleChange}
                value={formState.extraCheese}
              />
            </label>
            <br />
            <br />
            <label htmlFor="specialInstructions">
              Special Instructions:
              <br />
              <textarea
                name="specialInstructions"
                value={formState.specialInstructions}
                onChange={handleChange}
                cols="30"
                rows="10"
              />
            </label>
          </div>
        </label>
        <br />
        <button>+Add to Order</button>
      </form>
    </div>
  );
}
