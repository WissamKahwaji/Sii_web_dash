import React from "react";
import PageContainer from "../../Components/UI/PageContainer";

const ComingSoon = () => {
  return (
    <PageContainer
      className={`flex items-center justify-center flex-col min-h-screen`}
    >
      <img
      className={`w-60 rounded-full`}
        src="https://i.imgur.com/xCUITKc_d.webp?maxwidth=760&fidelity=grand"
        alt="sii_media"
      />
      <h2 className={`text-2xl`}>Coming Soon</h2>
    </PageContainer>
  );
};

export default ComingSoon;
