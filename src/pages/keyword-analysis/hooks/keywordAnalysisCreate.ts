import { Form } from "antd";
import { useEffect, useState } from "react";

export const useKeywordAnalysisCreate = () => {
  const [step, setStep] = useState<number>(1);

  const [progress, setProgress] = useState<number>(0);
  const [firstForm] = Form.useForm();

  const firstFormSubmit = async (val) => {
    try {
      console.log(val);
      setStep(step + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setProgress((step / 5) * 100);
  }, [step]);

  return {
    values: {
      step,
      progress,
      firstForm
    },
    functions: {
      setStep,
      firstFormSubmit,
    },
  };
};
