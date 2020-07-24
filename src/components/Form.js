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

  return (
    <div>
      <h2>Form Page</h2>
    </div>
  );
}
