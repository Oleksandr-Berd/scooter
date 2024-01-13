import * as SC from "./FAQsStyles";

import { questions } from "../../db/db";
import FAQsItem from "./FAQsItem";

const FAQs: React.FC = () => {
  return (
    <SC.FAQsSection>
      <SC.Title>FAQs</SC.Title>
      <SC.ListWrapper>
      <SC.SubTitle>How it works</SC.SubTitle>
      <SC.List>
        {questions
          .filter(({ category }) => category === "How it works")
          .map(({ id, question, answer }) => (
            <FAQsItem key={id} question={question} answer={answer} />
          ))}
      </SC.List>
      </SC.ListWrapper>
      <SC.ListWrapper>
      <SC.SubTitle >Safe driving</SC.SubTitle>
      <SC.List>
        {questions
          .filter(({ category }) => category === "Safe driving")
          .map(({ id, question, answer }) => (
            <FAQsItem key={id} question={question} answer={answer} />
          ))}
      </SC.List>
      </SC.ListWrapper>
    </SC.FAQsSection>
  );
};

export default FAQs;
