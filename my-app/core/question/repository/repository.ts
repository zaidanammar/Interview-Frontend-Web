import Instance from "../../../config/Instance";
import IQuestionRepository from "../repository";
import { IQuestion } from "../entities";

export default class QuestionRepository implements IQuestionRepository {
  private QUESTION_ROUTE = "/question";

  async getQuestionOne(): Promise<IQuestion[]> {
    try {
      const response = await Instance().get(`${this.QUESTION_ROUTE}/one`);
      const { data } = response.data;
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getQuestionTwo(): Promise<IQuestion[]> {
    try {
      const response = await Instance().get(`${this.QUESTION_ROUTE}/two`);
      const { data } = response.data;
      return data;
    } catch (error) {
      throw error;
    }
  }
}
