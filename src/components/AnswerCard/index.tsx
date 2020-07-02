import React from "react";
import { Row } from "antd";
import styled from "styled-components";
import AnswerCol from "./AnswerCol";

const Card = styled(Row)`
  padding: 5px;
  border: 1px solid #f0f0f0;
`;
interface Question {
  question: string;
  options: string[];
}

interface Props {
  questions: Question[];
  answerGroup: number[][];
  goQuestion?:(index:number)=>void
}

const AnswerCard = ({ questions, answerGroup,goQuestion }: Props) => {
  return (
    <Card>
      {questions.map((question, index) => {
        const answers = Array.from(answerGroup, (a) => a[index]);
        return (
          <AnswerCol
            key={question.question}
            options={question.options}
            answers={answers}
            num={index}
            goQuestion={goQuestion}
            ></AnswerCol>
        );
      })}
    </Card>
  );
};
export default AnswerCard;
