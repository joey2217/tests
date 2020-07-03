import React, { useEffect } from "react";
import { BrowserQRCodeSvgWriter } from "@zxing/library";
import styled from "styled-components";
import { Button } from "antd";
import { downSvg } from "../../utils/download";

interface Props {
  content: string;
}

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CodeImg = ({ content }: Props) => {
  useEffect(() => {
    const codeWriter = new BrowserQRCodeSvgWriter();
    // you can get a SVG element.
    // const svgElement = codeWriter.write(input, 300, 300);
    // or render it directly to DOM.
    codeWriter.writeToDom("#result", content, 300, 300);
  }, [content]);
  return (
    <ImgContainer>
      <div id="result"></div>
      <Button
        type="link"
        onClick={() => {
          downSvg("#result svg");
        }}
      >
        下载二维码
      </Button>
    </ImgContainer>
  );
};
export default CodeImg;
