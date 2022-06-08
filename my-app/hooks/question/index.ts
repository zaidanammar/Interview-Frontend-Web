import { useQuery } from "react-query";
import { QuestionService } from "../../services/question";

const useFetchQuestionOne = () => {
  return useQuery(["question-one"], () => QuestionService.getQuestionOne(), {
    refetchOnWindowFocus: false,
  });
};

const useFetchQuestionTwo = () => {
  return useQuery(["question-two"], () => QuestionService.getQuestionTwo(), {
    refetchOnWindowFocus: false,
  });
};

export { useFetchQuestionOne, useFetchQuestionTwo };
