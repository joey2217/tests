import React, { useState } from "react";
import AppHeader from "../../components/AppHeader";
import AnswerCard from "../../components/AnswerCard";
import QrCodeScanner from "../../components/QrCode/Scanner";
import loveConceptQuestions from "./data";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

const Finish = () => {
  const history = useHistory();

  const [visible, setVisible] = useState(true);

  const ownAnswers = history.location.state as number[];

  return (
    <>
      <AppHeader title="测试" />
      <AnswerCard
        questions={loveConceptQuestions}
        answerGroup={[[...ownAnswers]]}
      />
      <div style={{ textAlign: "center", padding: "10px 10vw" }}>
        <Button type="primary" block onClick={() => setVisible(true)}>
          Scan
        </Button>
      </div>
      <QrCodeScanner visible={visible} onClose={() => setVisible(false)} />
    </>
  );
};
export default Finish;
