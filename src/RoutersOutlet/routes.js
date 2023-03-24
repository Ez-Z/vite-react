import { lazy } from "react";
const Home = lazy(() => import("@/pages/Home"));
const SecondPage = lazy(() => import("@/pages/SecondPage"));

const routes = [
  {
    path: "/home",
    element: <Home />,
    // children: [
    // {
    //   path: "message",
    //   element: <Message />,
    //   children: [
    //     // 声明接收参数
    //     { path: "detail/:id/:title/:content", element: <Detail /> },
    //   ],
    // },
    // ],
  },
  {
    path: "/second",
    element: <SecondPage />,
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
]

export default routes;