import { Navigate, useRoutes, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { SpinLoading } from "antd-mobile";
import routes from "./routes";

export const Loading = () => {
  return (
    <div
      style={{
        paddingTop: 20,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <SpinLoading />
    </div>
  );
};

const RoutesOut = () => {
  //import!
  const getRoutesList = (rts: Array<any>): Array<any> => {
    return rts.map((item) => {
      if (item?.children && item?.children.length > 0) {
        return {
          path: item.path,
          element: item.component ? (
            <Suspense fallback={<Loading />}>
              <item.component />
            </Suspense>
          ) : (
            <Outlet />
          ),
          children: getRoutesList(item?.children),
        };
      } else {
        return {
          path: item.path,
          element: (
            <Suspense fallback={<Loading />}>
              <item.component />
            </Suspense>
          ),
        };
      }
    });
  };
  const newRoutes = getRoutesList(routes).map((item) => {
    console.log(item.children)
    item.children = [
      ...item.children,
      {
        path: "/",
        element: (
          <Navigate to={'/home'} replace />
        ),
      },
    ];
    return item;
  });

  const Routes = useRoutes([...newRoutes]);
  return Routes;
};

export default RoutesOut;
