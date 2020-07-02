import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Radio } from "antd";

interface Props {
  num: number;
  question: string;
  options: string[];
  answer?: number;
  onAnswerChange: (answer: number) => void;
}

const Index = styled.span`
  &::after {
    content: ".";
  }
`;

const Question = styled.div`
  font-size: 18px;
  font-weight: 500px;
  padding: 5px 10px;
  border-bottom: 1px solid #f0f0f0;
`;

const OptionGroup = styled(Radio.Group)`
  width: 100%;
  padding: 5px 0;
`;

const Option = styled(Radio)`
  padding-left: 10px;
  margin: 0;
  display: block;
  height: 40px;
  line-height: 35px;
  border-bottom: 1px solid #f0f0f0;
  &:hover {
    background-color: #69c0ff;
  }
`;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Single = ({
  num,
  question,
  options,
  answer,
  onAnswerChange,
}: Props) => {
  const [value, setValue] = useState(-1);

  useEffect(() => {
    setValue(Number(answer));
  }, [answer]);

  return (
    <>
      <Question>
        <Index>{num}</Index>
        <span>{question}</span>
      </Question>
      <OptionGroup
        value={value}
        onChange={(e) => {
          const value = e.target.value;
          setValue(value);
          onAnswerChange(value);
        }}
      >
        {options.map((option, index) => (
          <Option key={option} value={index}>
            {letters[index]} . {option}
          </Option>
        ))}
      </OptionGroup>
    </>
  );
};
export default Single;
