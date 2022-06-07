import { IQuestion } from "./entities";

export default interface IQuestionRepository {
  getQuestionOne(): Promise<IQuestion[]>;
  getQuestionTwo(): Promise<IQuestion[]>;
}
