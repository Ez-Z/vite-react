import { Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

const RoutesOut = () => {
  //import!
  const getRoutesList = (rts: Array<any>): Array<any> => {
    return rts.map((item) => {
      if (item?.children && item?.children.length > 0) {
        return {
          path: item.path,
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <item.component />
            </Suspense>
          ),
          children: getRoutesList(item?.children),
        };
      } else {
        return {
          path: item.path,
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <item.component />
            </Suspense>
          ),
        };
      }
    });
  };
  const newRoutes = getRoutesList(routes);

  const Routes = useRoutes(
    newRoutes,
  );
  return Routes;
};

export default RoutesOut;
