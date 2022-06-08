import QuestionRepository from "../../core/question/repository/repository";
import QuestionUsecase from "../../core/question/usecase/usecase";

export class QuestionService {
  static getQuestionOne = async () => {
    try {
      const questionRepo = new QuestionRepository();
      const questionUsecase = new QuestionUsecase(questionRepo);
      const question = await questionUsecase.getQuestionOne();
      return question;
    } catch (error) {
      throw error;
    }
  };
  
  static getQuestionTwo = async () => {
    try {
      const questionRepo = new QuestionRepository();
      const questionUsecase = new QuestionUsecase(questionRepo);
      const question = await questionUsecase.getQuestionTwo();
      return question;
    } catch (error) {
      throw error;
    }
  };
}
