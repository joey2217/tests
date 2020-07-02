import React from "react";
import AppHeader from "../../components/AppHeader";
import AnswerCard from "../../components/AnswerCard";
import loveConceptQuestions from "./data";
import { useHistory } from "react-router-dom";


const Finish = () => {

  const history = useHistory();

  
  const ownAnswers = history.location.state as number[]

  return (
    <>
      <AppHeader title="测试" />
      <AnswerCard questions={loveConceptQuestions} answerGroup={[[...ownAnswers]]} />
    </>
  );
};
export default Finish;
