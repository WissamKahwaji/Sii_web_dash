import React from "react";
import WebProjectOptions from "../Components/UI/WebProjectOptions";
import PageContainer from "../Components/UI/PageContainer";

const RallyGroup = () => {
  return (
    <PageContainer>
      <WebProjectOptions
        titleFirst="Website"
        titleSecond="Sii Dashboard"
        s
        titleThird="Client Dashboard"
        toFirst="https://rallygroup.siidevelopment.com/"
        toSecond="https://rallysii.siidevelopment.com/"
        toThird="https://www.rallydash.siidevelopment.com/"
      />
    </PageContainer>
  );
};

export default RallyGroup;
