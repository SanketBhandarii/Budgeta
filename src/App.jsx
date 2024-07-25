import React, { useState, useEffect } from "react";
import UserInfo from "./components/UserInfo";
import IncomeExpenses from "./components/IncomeExpenses";
import BudgetSummary from "./components/BudgetSummary";
import ReviewSave from "./components/ReviewSave";
import { fetchCurrencyRates } from "./services/currencyService";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    preferredCurrency: "USD",
    income: 0,
    expenses: [],
  });
  const [conversionRate, setConversionRate] = useState(1);

  useEffect(() => {
    if (formData.preferredCurrency !== "USD") {
      fetchCurrencyRates("USD", formData.preferredCurrency).then((rate) =>
        setConversionRate(rate)
      );
    }
  }, [formData.preferredCurrency]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const updateFormData = (newData) => setFormData({ ...formData, ...newData });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg">
        {step === 1 && (
          <UserInfo
            nextStep={nextStep}
            formData={formData}
            updateFormData={updateFormData}
          />
        )}
        {step === 2 && (
          <IncomeExpenses
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
            updateFormData={updateFormData}
          />
        )}
        {step === 3 && (
          <BudgetSummary
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
            conversionRate={conversionRate}
          />
        )}
        {step === 4 && <ReviewSave prevStep={prevStep} formData={formData} />}
      </div>
    </div>
  );
};

export default App;
