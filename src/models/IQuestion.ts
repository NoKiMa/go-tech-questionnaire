interface IQuestion {
  id:number;
  options: string | string[];
  question: string;
  required: boolean;
  type: string;
}

export default IQuestion;