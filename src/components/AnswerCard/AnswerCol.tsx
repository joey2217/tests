import React from "react";
import { Col } from "antd";
import styled from "styled-components";

const Wrapper = styled(Col)``;

const AnswerBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* border:1px solid #f5f5f5; */
  padding: 5px 0;
  text-align: center;
`;

const AnswerItem = styled.div`
  border: 1px solid #f5f5f5;
  padding: 3px;
  max-width: 100%;
  width: 30px;
  background-color: ${(props) => props.color};
  color: ${(props) => (props.color ? "#fff" : "#000")};
`;

interface Props {
  options: string[];
  answers: number[];
  num: number;
  goQuestion?: (index: number) => void;
}

const letters: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const answerView = (index: number) => {
  if (letters[index]) {
    return <>{letters[index]}</>;
  }
  return (
    <svg
      style={{ width: "100%", height: "100%" }}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2112"
      width="200"
      height="200"
    >
      <path
        d="M887.904 298.208c-12.864-12.064-33.152-11.488-45.216 1.408L415.936 753.984l-233.12-229.696C170.208 511.872 149.952 512 137.536 524.608c-12.416 12.576-12.256 32.864 0.352 45.248l256.48 252.672c0.096 0.096 0.224 0.128 0.32 0.224 0.096 0.096 0.128 0.224 0.224 0.32 2.016 1.92 4.448 3.008 6.784 4.288 1.152 0.672 2.144 1.664 3.36 2.144 3.776 1.472 7.776 2.24 11.744 2.24 4.192 0 8.384-0.832 12.288-2.496 1.312-0.544 2.336-1.664 3.552-2.368 2.4-1.408 4.896-2.592 6.944-4.672 0.096-0.096 0.128-0.256 0.224-0.352 0.064-0.096 0.192-0.128 0.288-0.224l449.184-478.208C901.44 330.592 900.768 310.336 887.904 298.208z"
        p-id="2113"
      ></path>
    </svg>
  );
};

const AnswerCol = ({ options, answers, num, goQuestion }: Props) => {
  return (
    <Wrapper
      xs={2}
      sm={2}
      md={2}
      lg={2}
      xl={2}
      onClick={() => goQuestion && goQuestion(num)}
    >
      <div style={{ width: "100%", textAlign: "center" }}>{num + 1}</div>
      <AnswerBox>
        {options.map((option, index) => {
          let color = "";
          if (answers.length === 1 && index === answers[0]) {
            color = "#73d13d";
          } else {
            if (answers[0] === answers[1]) {
              color = "#73d13d";
            } else if (index === answers[0]) {
              color = "#40a9ff";
            } else if (index === answers[1]) {
              color = "#f759ab";
            }
          }
          return (
            <AnswerItem key={option} color={color}>
              {answerView(index)}
            </AnswerItem>
          );
        })}
      </AnswerBox>
    </Wrapper>
  );
};
export default AnswerCol;
