import React from "react";

const BudgetSummary = ({ nextStep, prevStep, formData, conversionRate }) => {
  const totalExpenses = formData.expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );
  const remainingBudget = formData.income - totalExpenses;
  const convertedIncome = formData.income * conversionRate;
  const convertedExpenses = totalExpenses * conversionRate;
  const convertedRemaining = remainingBudget * conversionRate;

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Budget Summary
      </h2>
      <div className="space-y-4">
        <p className="text-lg">
          Total Income:{" "}
          <span className="font-medium text-blue-300">
            {formData.income} ({convertedIncome.toFixed(2)}{" "}
            {formData.preferredCurrency})
          </span>
        </p>
        <p className="text-lg">
          Total Expenses:{" "}
          <span className="font-medium text-red-300">
            {totalExpenses} ({convertedExpenses.toFixed(2)}{" "}
            {formData.preferredCurrency})
          </span>
        </p>
        <p className="text-lg">
          Remaining Budget:{" "}
          <span className="font-medium text-green-300">
            {remainingBudget} ({convertedRemaining.toFixed(2)}{" "}
            {formData.preferredCurrency})
          </span>
        </p>
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="bg-gray-600 text-white p-4 rounded-lg hover:bg-gray-700 transition"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BudgetSummary;
