import { Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

// const Home = lazy(() => import("@/pages/Home"));
// const SecondPage = lazy(() => import("@/pages/SecondPage"));

const RoutesOut = () => {
  //import!
  const getRoutesList = (
    rts: Array<any>,
    isChildren: boolean = false
  ): Array<any> => {
    return rts.map((item) => {
      const elmPath = `../pages${item.component}`;
      const Elm = lazy(() => import(elmPath /* @vite-ignore */));
      if (item?.children && item?.children.length > 0) {
        return {
          path: item.path,
          element: (
            <Suspense fallback={<div>loading</div>}>
              <Elm />
            </Suspense>
          ),
        };
      } else {
        return {
          path: item.path,
          element: (
            <Suspense fallback={<div>loading</div>}>
              <Elm />
            </Suspense>
          ),
        };
      }
    });
  };

  const routeOpt = getRoutesList(routes);

  const Routes = useRoutes(
    [
      ...routeOpt,
      {
        path: "/",
        element: <Navigate to={routeOpt?.[0]?.path} />,
      },
    ]

    //   [
    //   {
    //     path: "/home",
    //     element: (
    //       <Suspense>
    //         <Home />
    //       </Suspense>
    //     ),
    //     // children: [
    //     // {
    //     //   path: "message",
    //     //   element: <Message />,
    //     //   children: [
    //     //     // 声明接收参数
    //     //     { path: "detail/:id/:title/:content", element: <Detail /> },
    //     //   ],
    //     // },
    //     // ],
    //   },
    //   {
    //     path: "/second",
    //     element: (
    //       <Suspense>
    //         <SecondPage />
    //       </Suspense>
    //     ),
    //   },
    //   {
    //     path: "/",
    //     element: <Navigate to="/home" />,
    //   },
    // ]
  );
  return Routes;
};

export default RoutesOut;
