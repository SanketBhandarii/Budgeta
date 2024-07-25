import React from "react";

const ReviewSave = ({ prevStep, formData }) => {
  const handleSave = () => {
    localStorage.setItem("budgetData", JSON.stringify(formData));
    alert("Budget data saved!");
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Review and Save
      </h2>
      <div className="space-y-4">
        <p className="text-lg">
          Name:{" "}
          <span className="font-medium text-blue-300">{formData.name}</span>
        </p>
        <p className="text-lg">
          Email:{" "}
          <span className="font-medium text-blue-300">{formData.email}</span>
        </p>
        <p className="text-lg">
          Preferred Currency:{" "}
          <span className="font-medium text-blue-300">
            {formData.preferredCurrency}
          </span>
        </p>
        <p className="text-lg">
          Monthly Income:{" "}
          <span className="font-medium text-blue-300">{formData.income}</span>
        </p>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Expenses:</h3>
          {formData.expenses.map((expense, index) => (
            <p key={index} className="text-lg">
              {expense.name}:{" "}
              <span className="font-medium text-red-300">{expense.amount}</span>
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="bg-gray-600 text-white p-4 rounded-lg hover:bg-gray-700 transition"
        >
          Back
        </button>
        <button
          onClick={handleSave}
          className="bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ReviewSave;
