import { lazy } from "react";
import { BarChartOutlined, AimOutlined } from "@ant-design/icons";
interface Router {
  label?: string;
  path: string;
  key?: string;
  children?: Array<Router>;
  element: any;
  hideInMenu?: boolean;
  icon?: any;
}

const routes: Array<Router> = [
  {
    path: "/",
    element: lazy(() => import("@/layout/AppLayout")),
    children: [
      {
        path: "/home",
        label: "首页",
        element: lazy(() => import("@/pages/Home")),
        icon: BarChartOutlined,
        children: [
          {
            path: "/home/first",
            label: "首页子页面1",
            element: lazy(() => import("@/pages/Home/FirstPage")),
          },
          {
            path: "/home/first/form",
            label: "首页子页面1的子页面",
            hideInMenu: true,
            element: lazy(() => import("@/pages/Home/FirstPage/Form")),
          },
          {
            path: "/home/children",
            label: "首页子页面2",
            element: lazy(() => import("@/pages/Home/Children")),
          },
        ],
      },
      {
        path: "/second",
        label: "二级页",
        icon: AimOutlined,
        element: lazy(() => import("@/pages/SecondPage")),
      },
    ],
  },
];

export default routes;
