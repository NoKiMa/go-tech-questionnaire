import IAnswer from "../models/IAnswer";
import { ANSWER_URL } from "../utils/const";

const datafetchService = async (data: IAnswer[]) => {
  await fetch(ANSWER_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
};

export default datafetchService;
