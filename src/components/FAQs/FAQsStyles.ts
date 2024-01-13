import styled from "@emotion/styled";
import { IStyles } from "../../utils/interfaces";

export const FAQsSection = styled.section`
  padding-left: 32px;
  padding-right: 32px;

  margin-bottom: 120px;

  text-align: center;

  @media (min-width: 768px) {
    padding-left: 39px;
    padding-right: 40px;
  }

  @media (min-width: 1440px) {
    padding-left: 165px;
    padding-right: 165px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 48px;

  font-size: 32px;
  line-height: 1;

  color: #495567;

  @media (min-width: 768px) {
    margin-bottom: 64px;

    font-size: 48px;
    letter-spacing: -2.14px;
  }
`;

export const ListWrapper = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &:first-of-type {
    margin-bottom: 48px;

    @media (min-width: 768px) {
      margin-bottom: 32px;
    }

    @media (min-width: 1440px) {
      margin-bottom: 64px;
    }
  }
`;

export const List = styled.ul`
 
`;

export const SubTitle = styled.h3`
  margin-bottom: 32px;

  font-size: 24px;
  line-height: 1.67;

  color: #495567;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -1.79px;
  }
`;

export const Item = styled.li`
  background-color: #f2f5f9;

  &:not(:last-child) {
    margin-bottom: 16px;

    @media (min-width: 768px) {
      margin-bottom: 24px;
    }

    @media (min-width: 1440px) {
      width: 730px;

      margin-bottom: 16px;
    }
  }
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 32px;
  padding-right: 28px;

  text-align: left;

  @media (min-width: 768px) {
    padding-left: 40px;
  }
`;

export const Question = styled.h4`
  font-size: 18px;
  line-height: 1.33;

  color: #495567;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -1.07px;
  }
`;

export const AccordBtn = styled.button<Pick<IStyles, "isActive">>`
  background-color: transparent;

  border: none;

  & > svg {
    transform: ${(props) => props.isActive && "rotate(180deg)"};
  }
`;

export const AnswerWrapper = styled.div`
  padding-bottom: 32px;
  padding-left: 32px;
  padding-right: 32px;

  text-align: left;

  & > p {
    font-size: 15px;
    line-height: 1.67;

    color: #495567;
  }
`;
