import React, { useEffect } from "react";
import { BrowserQRCodeSvgWriter } from "@zxing/library";

interface Props {
  content: string;
}

const CodeImg = ({ content }: Props) => {
  useEffect(() => {
    console.log(content);
    const codeWriter = new BrowserQRCodeSvgWriter();
    // you can get a SVG element.
    // const svgElement = codeWriter.write(input, 300, 300);
    // or render it directly to DOM.
    codeWriter.writeToDom("#result", content, 300, 300);
  }, [content]);
  return <div id="result"></div>;
};
export default CodeImg;
