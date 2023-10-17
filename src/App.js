import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import IdentifyPage from "./Pages/IdentifyPage";
import MainDashboardRoot from "./Pages/MainDashboardRoot";
import PageContainer from "./Components/UI/PageContainer";
import IndexPageInMain from "./Pages/IndexPageInMain";
import Bblend from "./Pages/Bblend";
import ComingSoon from "./Pages/CreateNew/ComingSoon";
import RallyGroup from "./Pages/RallyGroup";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IdentifyPage />,
    },
    {
      path: "/main_dashboard",
      element: <MainDashboardRoot />,
      children: [
        {
          index: true,
          element: <IndexPageInMain />,
        },
        {
          path: "bblend",
          element: <Bblend />,
        },
        {
          path: "rallyGroup",
          element: <RallyGroup />,
        },
        {
          path: "create_new",
          element: <ComingSoon />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
