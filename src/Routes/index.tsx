import { Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { Spin } from "antd";
// import routes from "./routes";

const AppLayout = lazy(() => import("@/layout/AppLayout"));
const Home = lazy(() => import("@/pages/Home"));
const HomeFirst = lazy(() => import("@/pages/Home/FirstPage"));
const SecondPage = lazy(() => import("@/pages/SecondPage"));
const Children = lazy(() => import("@/pages/Children"));
const HomeChildren = lazy(() => import("@/pages/Home/Children"));

// const getRoutesList = (rts: Array<any>): Array<any> => {
//   return rts.map((item) => {
//     const elmPath = `../pages${item.component}`;
//     const Elm = lazy(() => import(elmPath /* @vite-ignore */));
//     if (item?.children && item?.children.length > 0) {
//       return {
//         path: item.path,
//         element: (
//           <Suspense fallback={<div>loading</div>}>
//             <Elm />
//           </Suspense>
//         ),
//         children: getRoutesList(item?.children),
//       };
//     } else {
//       return {
//         path: item.path,
//         element: (
//           <Suspense fallback={<div>loading</div>}>
//             <Elm />
//           </Suspense>
//         ),
//       };
//     }
//   });
// };

const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Spin size="large" />}>
        <AppLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/home",
        label: "首页",
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
        children: [
          {
            path: "/home",
            element: <Navigate to="/home/first" />,
          },
          {
            path: "/home/first",
            label: "首页1",
            element: (
              <Suspense fallback={<Spin size="large" />}>
                <HomeFirst />
              </Suspense>
            ),
          },
          {
            path: "/home/children",
            label: "首页2",
            element: (
              <Suspense fallback={<Spin size="large" />}>
                <HomeChildren />
              </Suspense>
            ),
          },
        ],
      },
      // {
      //   path: "/home/child/:id?",
      //   element: (
      //     <Suspense>
      //       <Children />
      //     </Suspense>
      //   ),
      // },
      {
        path: "/second",
        label: "二级页",
        element: (
          <Suspense fallback={<Spin size="large" />}>
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
];

const getMenu = (rts) => {
  return rts
    .filter((item) => item.label)
    .map((item) => {
      if (item.children) {
        return {
          label: item.label,
          key: item.key ?? item.path,
          children: getMenu(item.children),
        };
      } else {
        return {
          label: item.label,
          key: item.key ?? item.path,
        };
      }
    });
};

const getMenuP = (rts, obj = {}) => {
  const tempObj = obj ?? {};
  rts
    .filter((item) => item.label)
    .map((item) => {
      if (item.children) {
        tempObj[item.key ?? item.path] = {
          label: item.label,
          key: item.key ?? item.path,
          children: getMenuP(item.children, tempObj),
        };
      } else {
        tempObj[item.key ?? item.path] = {
          label: item.label,
          key: item.key ?? item.path,
        };
      }
    });

  return tempObj;
};

const menus = getMenu(routes?.[0]?.children);
const menusP = getMenuP(routes?.[0]?.children);

const RoutesOut = () => {
  //import!
  const Routes = useRoutes(
    // [
    //   ...newRoutes,
    //   {
    //     path: "/",
    //     element: <Navigate to="/home" />,
    //   },
    // ]
    routes
  );
  return Routes;
};

export default RoutesOut;
export { menus, menusP };
