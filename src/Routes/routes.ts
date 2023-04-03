import { lazy, Suspense } from "react";
const routes = [
  {
    path: "/",
    component: lazy(() => import("@/pages/Home")),
    index: true,
    children: [
      {
        path: "/child",
        component: lazy(() => import("@/pages/Home/Children")),
      },
    ]
  },
  {
    path: "/second",
    component: lazy(() => import("@/pages/SecondPage")),
  },
];

export default routes;
