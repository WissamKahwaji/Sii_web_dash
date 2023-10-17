import React from "react";
import WebProjectOptions from "../Components/UI/WebProjectOptions";
import PageContainer from "../Components/UI/PageContainer";

const Bblend = () => {
  return (
    <PageContainer>
      <WebProjectOptions
        titleFirst="Website"
        titleSecond="Sii Dashboard"
        titleThird="Client Dashboard"
        toFirst="https://siidevelopment.com/"
        toSecond="https://bblendsiidash.siidevelopment.com/"
        toThird="https://clientdash.siidevelopment.com/"
      />
    </PageContainer>
  );
};

export default Bblend;
