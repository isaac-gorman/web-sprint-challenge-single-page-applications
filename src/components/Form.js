import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";

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
  const [errors, setErrors] = useState({ ...defaultValues });
  const [post, setPost] = useState([]);

  const submitInput = (input) => {
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        setPost(res.data);
        console.log("success!", res.data);
      })
      .catch((error) => {
        console.log("Error detected: ", error.response);
      });
  };

  const formSchema = yup.object().shape({
    name: yup.string().min(2, "Please provide a name").required(),
    pizzaSize: yup.string(),
    pepperoni: yup.boolean(),
    pineapple: yup.boolean(),
    mushroom: yup.boolean(),
    extraCheese: yup.boolean(),
    specialInstructions: yup.string(),
  });

  const validateChange = (e) => {
    e.persist();
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((error) => {
        setErrors({ ...errors, [e.target.name]: error.errors[0] });
      });
  };

  const handleChange = (e) => {
    const value =
      e.target.type == "checkbox" ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
    console.log("formState: ", formState);
    validateChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitInput(formState);
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
          {errors.name.length > 0 ? (
            <p style={{ color: "red", fontSize: ".55em" }}>{errors.name}</p>
          ) : null}
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
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  );
}
