import { Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));
const SecondPage = lazy(() => import("@/pages/SecondPage"));

const RoutersOutlet = () => {
  const routes = useRoutes([
    {
      path: "/home",
      element: (
        <Suspense>
          <Home />
        </Suspense>
      ),
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
      element: (
        <Suspense>
          <SecondPage />
        </Suspense>
      ),
    },
    {
      path: "/",
      element: <Navigate to="/home" />,
    },
  ]);
  return routes;
};

export default RoutersOutlet;
