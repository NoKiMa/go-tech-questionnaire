interface ICard {
  id: number;
  question: string;
  answerOptions: string | string[];
  userAnswer: string;
  required: boolean;
  type: ECardType;
}

export enum ECardType {
  radio = "radio",
  radioWithText = "radioWithText",
  input = "text",
}

export default ICard;
