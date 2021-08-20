import IQuestionary from "../models/IAnswer";
import { ANSWER_URL } from "../utils/const";

const datafetchService = async (data: IQuestionary[]) => {
  await fetch(ANSWER_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
};

export default datafetchService;
