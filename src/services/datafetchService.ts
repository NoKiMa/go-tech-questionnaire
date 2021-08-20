import ICard from "../models/ICard";
import { QUESTIONS_URL } from "../utils/const";

const datafetchService = async () => {
  let response = await fetch(QUESTIONS_URL);
  let data = await response.json();
  let res: ICard[] = data.map((item: any) => {
    return {
      id: item.id,
      answerOptions: item.options,
      question: item.question,
      required: item.required,
      type: item.type,
    };
  });
  return res;
};

export default datafetchService;
