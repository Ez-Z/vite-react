import { lazy } from "react";
const routes = [
  {
    path: "/",
    component: lazy(() => import("@/layout/AppLayout")),
    children: [
      {
        path: "/home",
        // component: lazy(() => import("@/pages/Home")),
        index: true,
        children: [
          {
            path: "/home",
            component: lazy(() => import("@/pages/Home")),
          },
          {
            path: "/home/child",
            component: lazy(() => import("@/pages/Home/Children")),
          },
        ],
      },
      {
        path: "/second",
        component: lazy(() => import("@/pages/SecondPage")),
      },
    ]
  },
  
];

export default routes;
