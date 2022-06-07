import { IQuestion } from "./entities";

export default interface IQuestionUsecase {
  getQuestionOne(): Promise<IQuestion[]>;
  getQuestionTwo(): Promise<IQuestion[]>;
}
