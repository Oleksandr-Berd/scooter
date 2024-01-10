import * as SC from "./FAQsStyles";

import { questions } from "../../db/db";
import FAQsItem from "./FAQsItem";

const FAQs: React.FC = () => {
  return (
    <SC.FAQsSection>
      <SC.Title>FAQs</SC.Title>
      <ul>
        <SC.SubTitle>How it works</SC.SubTitle>
        {questions
          .filter(({ category }) => category === "How it works")
          .map(({ id, question, answer }) => (
            <FAQsItem key={id} question={question} answer={answer} />
          ))}
        <SC.SubTitle style={{marginTop:"32px"}}>Safe driving</SC.SubTitle>
        {questions
          .filter(({ category }) => category === "Safe driving")
          .map(({ id, question, answer }) => (
            <FAQsItem key={id} question={question} answer={answer} />
          ))}
      </ul>
    </SC.FAQsSection>
  );
};

export default FAQs;
