import { Form } from "antd";

export const useKeywordFirstForm = ({ step, setStep }) => {
  const [firstForm] = Form.useForm();

  const firstFormSubmit = async (val) => {
    try {
      console.log(val);
      setStep(step + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    values: {
        firstForm
    },
    functions: {
        firstFormSubmit
    },
  };
};
