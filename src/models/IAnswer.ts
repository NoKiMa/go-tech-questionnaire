interface IAnswer {
  question: string;
  answer: string | string[];
  required: boolean;
  questionId: number;
}

export default IAnswer;
