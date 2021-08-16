import IQuestion from '../models/IQuestion'

const datafetchService = async () => {
  let response = await fetch("http://localhost:3004/questions");
  let data = await response.json();
  let res: IQuestion[] = data.map( (item:any) => {
    return {
      id: item.id,
      options: item.options,
      question: item.question,
      required: item.required,
      type: item.type
    }
  })
  return res;
};

export default datafetchService;