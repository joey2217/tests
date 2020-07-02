import React, { useState } from "react";
import AppHeader from "../../components/AppHeader";
import AnswerCard from "../../components/AnswerCard";
import QrCodeScanner from "../../components/QrCode/Scanner";
import QrCodeImg from "../../components/QrCode/CodeImg";
import loveConceptQuestions from "./data";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import { join } from "path";

const Finish = () => {
  const history = useHistory();

  const [visible, setVisible] = useState(false);
  const [useCamera, setUseCamera] = useState(false);

  const ownAnswers = history.location.state as number[];

  return (
    <>
      <AppHeader title="测试" />
      <AnswerCard
        questions={loveConceptQuestions}
        answerGroup={[[...ownAnswers]]}
      />
      <div style={{ textAlign: "center", padding: "10px 10vw" }}>
        <Button
          type="primary"
          block
          onClick={() => {
            if (!useCamera) {
              setUseCamera(true);
            }
            setVisible(true);
          }}
        >
          Scan
        </Button>
      </div>
      {useCamera && (
        <QrCodeScanner visible={visible} onClose={() => setVisible(false)} />
      )}
      <QrCodeImg content={JSON.stringify({id:1})} />
    </>
  );
};
export default Finish;
