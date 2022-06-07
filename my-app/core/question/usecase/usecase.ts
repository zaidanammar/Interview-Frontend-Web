import { IQuestion } from "../entities";
import IQuestionRepository from "../repository";
import IQuestionUsecase from "../usecase";

export default class QuestionUsecase implements IQuestionUsecase {
  private QuesionRepo: IQuestionRepository;

  constructor(QuesionRepo: IQuestionRepository) {
    this.QuesionRepo = QuesionRepo;
  }

  async getQuestionOne(): Promise<IQuestion[]> {
    const data = await this.QuesionRepo.getQuestionOne();
    return data;
  }
  async getQuestionTwo(): Promise<IQuestion[]> {
    const data = await this.QuesionRepo.getQuestionTwo();
    return data;
  }
}
