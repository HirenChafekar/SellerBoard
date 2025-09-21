import { Form } from "antd";
import { useEffect, useState } from "react";

export const useKeywordAnalysisCreate = () => {
  const [step, setStep] = useState<number>(1);

  const [progress, setProgress] = useState<number>(0);


  useEffect(() => {
    setProgress((step / 5) * 100);
  }, [step]);

  return {
    values: {
      step,
      progress
    },
    functions: {
      setStep,
    },
  };
};
