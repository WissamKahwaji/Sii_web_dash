import React from "react";
import styles from "../../Styles/PageContainer.module.css";
const PageContainer = ({ children, className }) => {
  return (
    <div
      className={`md:w-[80%] w-[50%] absolute right-0 top-0 p-2 ${className} opacity-0 scale-0 ${styles["page-container"]}`}
    >
      {children}
    </div>
  );
};

export default PageContainer;
