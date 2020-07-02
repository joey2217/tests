import React, { useState } from "react";
import AppHeader from "../../components/AppHeader";
import Panel from "../../components/Panel";
import Single from "../../components/Question/Single";
import loveConceptQuestions from "./data";
import { Progress, Button } from "antd";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import AnswerCard from "../../components/AnswerCard";

const ProgressWrapper = styled.div`
  text-align: center;
  padding: 5px 0;
`;

const LoveConcept = () => {
  const [num, setNum] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    Array(loveConceptQuestions.length).fill(-1)
  );

  const history = useHistory();

  let progressPercent = Math.round(
    (answers.filter((a) => a !== -1).length / loveConceptQuestions.length) * 100
  );

  const onAnswerChange = (answer: number) => {
    const newAnswers = [...answers];
    newAnswers[num] = answer;
    setAnswers(newAnswers);
    const nowNum = num + 1;
    if (nowNum < loveConceptQuestions.length) {
      setTimeout(() => {
        setNum(nowNum);
      }, 400);
    }
  };

  // useEffect(()=>{
  //   const finishedNum = answers.filter(item=>item!==-1).length
  //   if (finishedNum===loveConceptQuestions.length) {
  //     console.log("完成了");
  //     history.push('/love-concept-finish',{answers:answers})
  //   }
  // },[answers, history])

  const finishedAll =
    answers.filter((item) => item !== -1).length ===
    loveConceptQuestions.length;

  const onFinished = () => {
    console.log("完成了");
    history.push("/love-concept-finish", answers);
  };

  return (
    <>
      <AppHeader title="测试" />
      <ProgressWrapper>
        <span>
          {num + 1}/{loveConceptQuestions.length}
        </span>
        <Progress
          strokeColor={{
            "0%": "#108ee9",
            "100%": "#87d068",
          }}
          percent={progressPercent}
        />
      </ProgressWrapper>
      <Single
        num={num + 1}
        question={loveConceptQuestions[num].question}
        options={loveConceptQuestions[num].options}
        answer={answers[num]}
        onAnswerChange={onAnswerChange}
      />

      {finishedAll && (
        <Button type="primary" block onClick={onFinished}>
          结果
          <RightOutlined />
        </Button>
      )}
      <Panel>
        <AnswerCard
          questions={loveConceptQuestions}
          answerGroup={[[...answers]]}
          goQuestion={(num) => setNum(num)}
        />
      </Panel>
    </>
  );
};
export default LoveConcept;
