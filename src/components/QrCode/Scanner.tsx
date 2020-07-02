import React, { useEffect } from "react";
import styled from "styled-components";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { BrowserQRCodeReader } from "@zxing/library";
import { notification } from "antd";

interface Props {
  visible: boolean;
  onClose: () => void;
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  background: #fff;
`;
const Footer = styled.div`
  position: fixed;
  max-height: 20vh;
  height: 200px;
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
  height: 80vh;
`;

const QrCodeScanner = ({ visible, onClose }: Props) => {
  // const [reader,setReader] = useState<BrowserQRCodeReader>();

  useEffect(() => {
    (async () => {
      try {
        const codeReader = new BrowserQRCodeReader();
        const videoInputDevices = await codeReader.listVideoInputDevices();
        notification.open({
          message: "摄像头",
          description: JSON.stringify(videoInputDevices),
          duration: 0,
        });

        const deviceId =
          videoInputDevices[videoInputDevices.length - 1].deviceId;
        const result = await codeReader.decodeOnceFromVideoDevice(
          deviceId,
          "video"
        );
        notification.open({
          message: "结果",
          description: JSON.stringify(result),
          duration: 0,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Container style={{ display: visible ? "block" : "none" }}>
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
