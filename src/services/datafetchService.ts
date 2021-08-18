import IQuestion from "../models/IQuestion";
import { QUESTIONS_URL } from "../utils/const";

const datafetchService = async () => {
  let response = await fetch(QUESTIONS_URL);
  let data = await response.json();
  let res: IQuestion[] = data.map((item: any) => {
    return {
      id: item.id,
      options: item.options,
      question: item.question,
      required: item.required,
      type: item.type,
    };
  });
  return res;
};

export default datafetchService;
