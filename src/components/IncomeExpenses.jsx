import React from "react";

const IncomeExpenses = ({ nextStep, prevStep, formData, updateFormData }) => {
  const handleChange = (e) =>
    updateFormData({ [e.target.name]: e.target.value });

  const handleAddExpense = () => {
    updateFormData({
      expenses: [...formData.expenses, { name: "", amount: 0 }],
    });
  };

  const handleRemoveExpense = (index) => {
    const newExpenses = formData.expenses.filter((_, i) => i !== index);
    updateFormData({ expenses: newExpenses });
  };

  const handleExpenseChange = (index, e) => {
    const newExpenses = formData.expenses.map((expense, i) =>
      i === index ? { ...expense, [e.target.name]: e.target.value } : expense
    );
    updateFormData({ expenses: newExpenses });
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Income and <span className="text-cyan-400">Expenses</span>
      </h2>
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Monthly Income</label>
        <input
          type="number"
          name="income"
          value={formData.income}
          onChange={handleChange}
          required
          className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg"
        />
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Expenses</h3>
        {formData.expenses.map((expense, index) => (
          <div key={index} className="flex items-center mb-4">
            <input
              type="text"
              name="name"
              value={expense.name}
              required
              onChange={(e) => handleExpenseChange(index, e)}
              className="w-1/3 p-3 bg-gray-700 text-white border border-gray-600 rounded-lg mr-2"
              placeholder="Expense Name"
            />
            <input
              type="number"
              name="amount"
              value={expense.amount}
              required
              onChange={(e) => handleExpenseChange(index, e)}
              className="w-1/3 p-3 bg-gray-700 text-white border border-gray-600 rounded-lg mr-2"
              placeholder="Amount"
            />
            <button
              onClick={() => handleRemoveExpense(index)}
              className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={handleAddExpense}
          className="w-full bg-cyan-600 text-white p-3 rounded-lg hover:bg-cyan-700 transition"
        >
          Add Expense
        </button>
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700 transition"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default IncomeExpenses;
