import IAnswer from '../models/IAnswer'
import {ANSWER_URL} from '../utils/const'

const datafetchService = async (data: IAnswer[]) => {
 await data.forEach(async (item) => {
    const answer = {
      "answer": item.answer,
      "question": item.question,
    }
     await fetch(ANSWER_URL, {
    method: 'POST',
    body: JSON.stringify(answer),
    headers:{'Content-Type':'application/json'}
  });
  })
 
 
};

export default datafetchService;