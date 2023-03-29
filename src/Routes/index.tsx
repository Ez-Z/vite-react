import { Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { Spin } from "antd";
import routesList from "./routes";
interface Router {
  label?: string;
  path: string;
  key?: string;
  children?: Array<Router>;
  element: any;
  hideInMenu?: boolean;
}

const AppLayout = lazy(() => import("@/layout/AppLayout"));
const Home = lazy(() => import("@/pages/Home"));
const HomeFirst = lazy(() => import("@/pages/Home/FirstPage"));
const SecondPage = lazy(() => import("@/pages/SecondPage"));
const FormPage = lazy(() => import("@/pages/Home/FirstPage/Form"));
const HomeChildren = lazy(() => import("@/pages/Home/Children"));

const getRoutesList = (rts: Array<any>): Array<any> => {
  return rts.map((item) => {
    if (item?.children && item?.children.length > 0) {
      return {
        path: item.path,
        element: (
          <Suspense fallback={<Spin size="large" />}>
            <item.element />
          </Suspense>
        ),
        children: getRoutesList(item?.children),
      };
    } else {
      return {
        path: item.path,
        element: (
          <Suspense fallback={<Spin size="large" />}>
            <item.element />
          </Suspense>
        ),
      };
    }
  });
};

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
            label: "首页子页面1",
            element: (
              <Suspense fallback={<Spin size="large" />}>
                <HomeFirst />
              </Suspense>
            ),
          },
          {
            path: "/home/first/form",
            label: "首页子页面1的子页面",
            hideInMenu: true,
            element: (
              <Suspense fallback={<Spin size="large" />}>
                <FormPage />
              </Suspense>
            ),
          },
          {
            path: "/home/children",
            label: "首页子页面1",
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

const getMenu = (rts: Array<Router>): Array<any> => {
  return rts
    .filter((item) => item.label)
    .map((item) => {
      if (!item.hideInMenu) {
        if (item.children) {
          const childrenA = getMenu(item.children);
          if (childrenA.length > 0) {
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
        } else {
          return {
            label: item.label,
            key: item.key ?? item.path,
          };
        }
      }
    })
    .filter((it) => it);
};

const getMenuP = (rts: Array<Router>, obj = {}): any => {
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

const menus = getMenu(routesList?.[0]?.children);
const menusP = getMenuP(routesList?.[0]?.children);

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
    [
      ...getRoutesList(routesList),
      {
        path: "/",
        element: <Navigate to="/home/first" />,
      },
    ]
    // routes
  );
  return Routes;
};

export default RoutesOut;
export { menus, menusP };
