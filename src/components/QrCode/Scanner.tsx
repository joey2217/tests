import React, { useEffect } from "react";
import styled from "styled-components";
import { CloseOutlined, CheckOutlined, LeftOutlined } from "@ant-design/icons";
import { BrowserQRCodeReader } from "@zxing/library";
import { message } from "antd";
import AppHeader from "../AppHeader";

interface Props {
  visible: boolean;
  onClose: () => void;
  onSuccess: (answers: number[]) => void;
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  background: #fff;
  z-index: 100;
`;
const Footer = styled.div`
  position: fixed;
  max-height: 20vh;
  height: 100px;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #d9d9d9;
`;

const FooterIcon = styled.div`
  border-radius: 50%;
  background-color: #bfbfbf;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScanWindow = styled.video`
  width: 100%;
  height: calc(80vh - 45px);
`;

const codeReader = new BrowserQRCodeReader();


const QrCodeScanner = ({ visible, onClose, onSuccess }: Props) => {
  // const [reader,setReader] = useState<BrowserQRCodeReader>();
  useEffect(() => {
    (async () => {
      try {
        const videoInputDevices = await codeReader.listVideoInputDevices();
        console.log("摄像头" + JSON.stringify(videoInputDevices));
        const deviceId =
          videoInputDevices[videoInputDevices.length - 1].deviceId;
        const result = await codeReader.decodeOnceFromVideoDevice(
          deviceId,
          "video"
        );
        console.log("结果" + JSON.stringify(result));
        message.success("扫描成功!");
        const answers = JSON.parse(result.getText());
        onSuccess(answers);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [onSuccess]);

  return (
    <Container style={{ display: visible ? "block" : "none" }}>
      <AppHeader
        title="扫描二维码"
        leftIcon={<LeftOutlined onClick={onClose} />}
      />
      <ScanWindow id="video"></ScanWindow>
      <Footer>
        <FooterIcon>
          <CloseOutlined
            style={{ fontSize: "20px", color: "#fff" }}
            onClick={onClose}
          />
        </FooterIcon>
        <FooterIcon>
          <CheckOutlined style={{ fontSize: "20px", color: "#fff" }} />
        </FooterIcon>
      </Footer>
    </Container>
  );
};
export default QrCodeScanner;

// style={{
//   height: "100vh" ,
//   width: "100%",
//   position: "absolute",
//   top: 0,
//   background: "#fff",
// }}
