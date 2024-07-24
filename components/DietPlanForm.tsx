"use client"
import React, { useState } from 'react';

const DietPlanForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    weight: '',
    height: '',
    activityLevel: '',
    dietaryGoals: '',
    allergies: '',
    medicalConditions: '',
    currentDiet: '',
    supplementsMedications: '',
    healthObjectives: '',
    foodPreferences: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [aiResponse, setAiResponse] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setFetching(true);
    setError(null);
    setAiResponse('');

    try {
      const response = await fetch('/api/generateDiet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        setAiResponse(data.dietPlan);
      }
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setError("An error occurred while generating the diet plan.");
    } finally {
      setFetching(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      {!formSubmitted ? (
        <>
          <h2 className="text-2xl font-semibold mb-6">Personalized Diet Plan Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">Age</label>
              <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
              <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
              <input type="number" id="weight" name="weight" value={formData.weight} onChange={handleChange} required className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
              <input type="number" id="height" name="height" value={formData.height} onChange={handleChange} required className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="activityLevel" className="block text-sm font-medium text-gray-700 mb-2">Activity Level</label>
              <select id="activityLevel" name="activityLevel" value={formData.activityLevel} onChange={handleChange} required className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500">
                <option value="">Select Activity Level</option>
                <option value="sedentary">Sedentary</option>
                <option value="lightlyActive">Lightly Active</option>
                <option value="moderatelyActive">Moderately Active</option>
                <option value="veryActive">Very Active</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="dietaryGoals" className="block text-sm font-medium text-gray-700 mb-2">Dietary Goals</label>
              <select id="dietaryGoals" name="dietaryGoals" value={formData.dietaryGoals} onChange={handleChange} required className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500">
                <option value="">Select Dietary Goals</option>
                <option value="weightLoss">Weight Loss</option>
                <option value="weightGain">Weight Gain</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="allergies" className="block text-sm font-medium text-gray-700 mb-2">Food Allergies or Intolerances</label>
              <input type="text" id="allergies" name="allergies" value={formData.allergies} onChange={handleChange} className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="medicalConditions" className="block text-sm font-medium text-gray-700 mb-2">Medical Conditions</label>
              <input type="text" id="medicalConditions" name="medicalConditions" value={formData.medicalConditions} onChange={handleChange} className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="currentDiet" className="block text-sm font-medium text-gray-700 mb-2">Current Diet</label>
              <input type="text" id="currentDiet" name="currentDiet" value={formData.currentDiet} onChange={handleChange} className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="supplementsMedications" className="block text-sm font-medium text-gray-700 mb-2">Supplements or Medications</label>
              <input type="text" id="supplementsMedications" name="supplementsMedications" value={formData.supplementsMedications} onChange={handleChange} className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="healthObjectives" className="block text-sm font-medium text-gray-700 mb-2">Health Objectives</label>
              <input type="text" id="healthObjectives" name="healthObjectives" value={formData.healthObjectives} onChange={handleChange} className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="foodPreferences" className="block text-sm font-medium text-gray-700 mb-2">Food Preferences</label>
              <input type="text" id="foodPreferences" name="foodPreferences" value={formData.foodPreferences} onChange={handleChange} className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500" />
            </div>
            <div className="mt-6">
              <button
               type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">{fetching ? 'Fetching AI response...' : 'Submit'}</button>
            </div>
          </form>
        </>
      ) : (
        <div className="overflow-x-auto">
          <h2 className="text-2xl font-semibold mb-6">Personalized Diet Plan</h2>
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <p className="mb-4">{aiResponse}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DietPlanForm;
