import { useState } from "react";

import * as SC from './FAQsStyles'

import { ReactComponent as Arrow } from "../../assets/icons/chevron.svg";

type Props = {
  question: string;
  answer: string;
};

const FAQsItem: React.FC<Props> = ({ question, answer }) => {
  const [isAnswer, setIsAnswer] = useState<boolean>(false);
  const handleAnswer = () => {
    setIsAnswer(!isAnswer);
  };

  return (
    <SC.Item>
      <SC.QuestionWrapper>
        <h4>{question}</h4>
        <SC.AccordBtn onClick={handleAnswer} isActive={isAnswer}>
          <Arrow />
        </SC.AccordBtn>
      </SC.QuestionWrapper>
      {isAnswer ? (
        <SC.AnswerWrapper>
          <p>{answer}</p>
        </SC.AnswerWrapper>
      ) : null}
    </SC.Item>
  );
};

export default FAQsItem;
