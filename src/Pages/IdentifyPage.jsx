import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/IdentifyPage.module.css";
import { BsBoxArrowUpRight } from "react-icons/bs";
const IdentifyPage = () => {
  const [passKey, setPassKey] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  const isAdminChecker = () => {
    if (passKey === "siiMediaAdmin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
      window.alert("Bad Credential");
    }
  };
  return (
    <div className={`min-h-screen flex items-center justify-center flex-col`}>
      <div className={`mb-4`}>
        <img
          src="https://i.imgur.com/YL5WaGf_d.webp?maxwidth=760&fidelity=grand"
          alt="sii_media"
          className={`w-56`}
        />
      </div>
      <div className={`flex flex-col items-center justify-center mb-4`}>
        <label className={`text-[#7e0a46] mb-2`}>Enter The Pass Key</label>
        <input
          placeholder="Please Enter the Pass Key"
          className={`rounded-xl p-1 border border-[#236477] outline-none w-80 mb-2`}
          value={passKey}
          onChange={(e) => {
            setPassKey(e.target.value);
          }}
          type="password"
        />
        <button
          onClick={isAdminChecker}
          className={`border border-[#7e0a46] rounded-xl text-lg font-medium px-8 py-1 text-[#236477] hover:text-[#7e0a46] hover:border-[#236477] duration-500`}
        >
          Check
        </button>
      </div>
      {isAdmin && (
        <Link
          to="/main_dashboard"
          className={`opacity-0 ${styles["main-dashboard-link"]} underline flex items-center`}
        >
          <span className={`mr-2`}>Main Dashboard</span> <BsBoxArrowUpRight />
        </Link>
      )}
    </div>
  );
};

export default IdentifyPage;
