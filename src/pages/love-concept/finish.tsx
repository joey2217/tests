import React, { useState } from "react";
import AppHeader from "../../components/AppHeader";
import AnswerCard from "../../components/AnswerCard";
import QrCodeScanner from "../../components/QrCode/Scanner";
import QrCodeImg from "../../components/QrCode/CodeImg";
import loveConceptQuestions from "./data";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";

const Finish = () => {
  const history = useHistory();

  const [visible, setVisible] = useState(false);
  const [useCamera, setUseCamera] = useState(false);
  const [otherAnswer, setOtherAnswer] = useState<number[]>([]);

  const ownAnswers = history.location.state as number[];

  return (
    <>
      <AppHeader
        title="测试"
        leftIcon={<LeftOutlined onClick={() => history.goBack()} />}
      />
      <AnswerCard
        questions={loveConceptQuestions}
        answerGroup={[[...ownAnswers], [...otherAnswer]]}
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
        <QrCodeScanner
          visible={visible}
          onClose={() => setVisible(false)}
          onSuccess={(answers) => setOtherAnswer(answers)}
        />
      )}
      <QrCodeImg content={JSON.stringify(ownAnswers)} />
      <div></div>
    </>
  );
};
export default Finish;
