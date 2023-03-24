import { Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

const AppLayout = lazy(() => import("@/layout/AppLayout"));
const Home = lazy(() => import("@/pages/Home"));
const SecondPage = lazy(() => import("@/pages/SecondPage"));
const Children = lazy(() => import("@/pages/Children"));
const HomeChildren = lazy(() => import("@/pages/Home/Children"));

const RoutesOut = () => {
  //import!
  const getRoutesList = (rts: Array<any>): Array<any> => {
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
          children: getRoutesList(item?.children),
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
  const newRoutes = getRoutesList(routes);

  const Routes = useRoutes(
    // [
    //   ...newRoutes,
    //   {
    //     path: "/",
    //     element: <Navigate to="/home" />,
    //   },
    // ]
    [
      {
        path: "/",
        element: (
          <Suspense>
            <AppLayout />
          </Suspense>
        ),
        children: [
          {
            path: "/home",
            element: (
              <Suspense>
                <Home />
              </Suspense>
            ),
            children: [
              {
                path: "/home/children",
                element: (
                  <Suspense>
                    <HomeChildren />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: "/home/child/:id?",
            element: (
              <Suspense>
                <Children />
              </Suspense>
            ),
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
        ],
      },
    ]
  );
  return Routes;
};

export default RoutesOut;
