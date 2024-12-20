import React, { useState } from "react";
import axios from "axios";
import "./DietPlanForm.css";

const DietPlanForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    activity_level: "",
    goal: "",
    specific_goal: "",
    medical_conditions: "",
    nutritional_needs: "",
    daily_diet: "",
    eating_out_frequency: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/diet-plan/",
        formData
      );
      alert("Form submitted successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form.");
    }
  };

  return (
    <div className="diet-plan-form">
      <nav className="navbar">
        <h1>Diet Plan App</h1>
      </nav>

      <form className="form-container" onSubmit={handleSubmit}>
        <h1 className="form-heading">Personalized Diet Plan</h1>

        <h2 className="section-heading">Basic Information</h2>
        <div className="input-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
          />
        </div>
        <div className="input-group">
          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="input-group">
          <label>Height</label>
          <input
            type="text"
            name="height"
            value={formData.height}
            onChange={handleChange}
            placeholder="Enter your height (e.g., 5'6)"
          />
        </div>
        <div className="input-group">
          <label>Weight</label>
          <input
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Enter your weight (e.g., 70 kg)"
          />
        </div>
        <div className="input-group">
          <label>Activity Level</label>
          <select
            name="activity_level"
            value={formData.activity_level}
            onChange={handleChange}
          >
            <option value="">Select Activity Level</option>
            <option value="sedentary">Sedentary</option>
            <option value="moderate">Moderate</option>
            <option value="active">Active</option>
          </select>
        </div>

        <h2 className="section-heading">Diet Goals</h2>
        <div className="input-group">
          <label>Goal</label>
          <select
            name="goal"
            value={formData.goal}
            onChange={handleChange}
          >
            <option value="">Select Goal</option>
            <option value="weight-loss">Weight Loss</option>
            <option value="weight-gain">Weight Gain</option>
            <option value="maintain">Maintain Weight</option>
          </select>
        </div>
        <div className="input-group">
          <label>Specific Goal</label>
          <input
            type="text"
            name="specific_goal"
            value={formData.specific_goal}
            onChange={handleChange}
            placeholder="Enter your specific goal (e.g., Lose 5 kg)"
          />
        </div>

        <h2 className="section-heading">Health Information</h2>
        <div className="input-group">
          <label>Medical Conditions</label>
          <textarea
            name="medical_conditions"
            value={formData.medical_conditions}
            onChange={handleChange}
            placeholder="Describe any medical conditions"
          />
        </div>
        <div className="input-group">
          <label>Nutritional Needs</label>
          <textarea
            name="nutritional_needs"
            value={formData.nutritional_needs}
            onChange={handleChange}
            placeholder="Specify your nutritional needs"
          />
        </div>

        <h2 className="section-heading">Current Eating Habits</h2>
        <div className="input-group">
          <label>Typical Daily Diet</label>
          <textarea
            name="daily_diet"
            value={formData.daily_diet}
            onChange={handleChange}
            placeholder="Describe your typical daily diet"
          />
        </div>
        <div className="input-group">
          <label>Frequency of Eating Out</label>
          <input
            type="text"
            name="eating_out_frequency"
            value={formData.eating_out_frequency}
            onChange={handleChange}
            placeholder="How often do you eat out? (e.g., 3 times a week)"
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      <footer className="footer">
        <p>&copy; 2024 Diet Plan App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DietPlanForm;
