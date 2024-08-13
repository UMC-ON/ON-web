import { useState } from 'react';

const StepEl = {
  title: '',
  element: '',
};

const useMultiStepForm = (steps = StepEl) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const prev = () => {
    setCurrentStepIndex((index) => (index <= 0 ? 0 : index - 1));
  };

  const next = (info) => {
    setCurrentStepIndex((index) =>
      index >= steps.length - 1 ? index : index + 1,
    );
    console.log(info);
  };

  return {
    currentStepIndex,
    currentTitle: steps[currentStepIndex].title,
    currentStep: steps[currentStepIndex].element,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    prev,
    next,
  };
};

export default useMultiStepForm;
